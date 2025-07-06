import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';

function Dashboard() {
  const navigate = useNavigate();
  const [futureClasses, setFutureClasses] = useState([]);
  const [todos, setTodos] = useState([
    { text: 'Pull Day', done: false },
    { text: 'Cardio 30min', done: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchFutureClasses = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        console.warn('Sem sessão. Redirecionar para login.');
        navigate('/');
        return;
      }

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        console.error('Erro ao obter utilizador:', authError);
        return;
      }

      const { data, error } = await supabase
        .from('Registrations')
        .select('classInfo:class_id(id, title, start_time, instructor), user_id')
        .eq('user_id', user.id);

      if (error) {
        console.error('ERRO Supabase:', error.message);
        return;
      }

      const upcoming = data
        .map(r => r.classInfo)
        .filter(cls => cls?.start_time && new Date(cls.start_time) > new Date())
        .sort((a, b) => new Date(a.start_time) - new Date(b.start_time));

      setFutureClasses(upcoming);
    };

    fetchFutureClasses();
  }, [navigate]);

  const toggleTodo = index => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { text: newTodo, done: false }]);
    setNewTodo('');
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <h1 className="text-3xl font-bold">Bem-vindo de volta!</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Próximas Aulas */}
        <div className="rounded-2xl bg-white p-4 shadow">
          <h2 className="mb-2 text-xl font-semibold">Próximas Aulas</h2>
          {futureClasses.length > 0 ? (
            <ul className="space-y-2">
              {futureClasses.map(cls => (
                <li key={cls.id} className="border-b pb-1">
                  <strong>{cls.title}</strong> -{' '}
                  {new Date(cls.start_time).toLocaleDateString('pt-PT', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                  })}{' '}
                  às{' '}
                  {new Date(cls.start_time).toLocaleTimeString('pt-PT', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}{' '}
                  com {cls.instructor}
                </li>
              ))}
            </ul>
          ) : (
            <p>Sem aulas marcadas</p>
          )}
        </div>

        {/* Plano de Treino */}
        <div className="rounded-2xl bg-white p-4 shadow">
          <h2 className="mb-2 text-xl font-semibold">Plano de Treino da Semana</h2>
          <div className="space-y-2">
            {todos.map((todo, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(index)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className={todo.done ? 'text-gray-400 line-through' : ''}>{todo.text}</span>
              </div>
            ))}
            <div className="mt-2 flex">
              <input
                type="text"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
                placeholder="Adicionar treino"
                className="flex-1 rounded-l border border-gray-300 px-2 py-1"
              />
              <button
                onClick={addTodo}
                className="cursor-pointer rounded-r bg-blue-500 px-4 text-white hover:bg-blue-600"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>

        {/* Dica Nutricional */}
        <div className="rounded-2xl bg-white p-4 shadow">
          <h2 className="mb-2 text-xl font-semibold">Dica Nutricional</h2>
          <p>Inclui proteína em cada refeição para melhor recuperação muscular.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
