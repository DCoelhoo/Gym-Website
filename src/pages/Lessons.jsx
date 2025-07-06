import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { supabase } from '../supabase/supabaseClient';
import { registerToClass } from '../utils/registerToClass';

const localizer = momentLocalizer(moment);

export default function Lessons() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    instructor: '',
    start_time: '',
  });

  useEffect(() => {
    fetchLessons();
  }, []);

  async function fetchLessons() {
    const { data, error } = await supabase.from('Classes').select('*');
    if (error) {
      console.error('Erro ao buscar aulas:', error);
      return;
    }

    const formattedEvents = data.map(cls => ({
      id: cls.id,
      title: cls.title || 'Lesson',
      start: new Date(cls.start_time),
      end: new Date(new Date(cls.start_time).getTime() + 60 * 60 * 1000),
      description: cls.description,
      instructor: cls.instructor,
    }));

    setEvents(formattedEvents);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { title, description, instructor, start_time } = formData;

    const { data, error } = await supabase.from('Classes').insert([
      { title, description, instructor, start_time }
    ]);

    if (error) {
      console.error('Erro ao criar aula:', error);
      return;
    }

    // Recarrega as aulas depois de criar
    fetchLessons();
    setFormData({ title: '', description: '', instructor: '', start_time: '' });
    setShowForm(false);
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 p-4">
      <h1 className="mb-4 text-4xl font-bold">Lessons</h1>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 cursor-pointer"
      >
        {showForm ? 'Cancelar' : 'Criar nova lição'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4 w-full max-w-2xl space-y-4 rounded bg-white p-6 shadow">
          <input
            type="text"
            placeholder="Título"
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
            className="w-full rounded border p-2"
            required
          />
          <input
            type="text"
            placeholder="Descrição"
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
            className="w-full rounded border p-2"
          />
          <input
            type="text"
            placeholder="Instrutor"
            value={formData.instructor}
            onChange={e => setFormData({ ...formData, instructor: e.target.value })}
            className="w-full rounded border p-2"
            required
          />
          <input
            type="datetime-local"
            value={formData.start_time}
            onChange={e => setFormData({ ...formData, start_time: e.target.value })}
            className="w-full rounded border p-2"
            required
          />
          <button
            type="submit"
            className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Criar Lição
          </button>
        </form>
      )}

      <div className="w-full max-w-7xl rounded bg-white p-4 shadow">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="month"
          style={{ height: 800 }}
          components={{
            event: ({ event }) => (
              <div>
                <strong>{event.title}</strong>
                <div style={{ fontSize: '0.8rem' }}>{event.instructor}</div>
                <div style={{ fontSize: '0.8rem' }}>{moment(event.start).format('HH:mm')}</div>
              </div>
            ),
          }}
          onSelectEvent={event => {
            if (confirm(`Queres-te inscrever na aula "${event.title}" com ${event.instructor}?`)) {
              registerToClass(event.id);
            }
          }}
        />
      </div>
    </div>
  );
}
