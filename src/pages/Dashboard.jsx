import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';

const API_KEY = '9766b01e426342478df4c7bab9e876d3'; // Replace with env variable in production

function Dashboard() {
  const navigate = useNavigate();
  const [futureClasses, setFutureClasses] = useState([]);
  const [todos, setTodos] = useState([
    { text: 'Pull Day', done: false },
    { text: '30min Cardio', done: false },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [nutrition, setNutrition] = useState(null);

  // Fetch user's upcoming class registrations
  useEffect(() => {
    const fetchFutureClasses = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        console.warn('No session. Redirecting to login.');
        navigate('/');
        return;
      }

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        console.error('Error fetching user:', authError);
        return;
      }

      // Fetch upcoming classes the user is registered for
      const { data, error } = await supabase
        .from('Registrations')
        .select('classInfo:class_id(id, title, start_time, instructor), user_id')
        .eq('user_id', user.id);

      if (error) {
        console.error('Supabase error:', error.message);
        return;
      }

      // Filter future classes
      const upcoming = data
        .map(r => r.classInfo)
        .filter(cls => cls?.start_time && new Date(cls.start_time) > new Date())
        .sort((a, b) => new Date(a.start_time) - new Date(b.start_time));

      setFutureClasses(upcoming);

      const fetchTodayNutrition = async () => {
        try {
          const res = await fetch(
            `https://api.spoonacular.com/mealplanner/generate?timeFrame=week&targetCalories=2000&apiKey=${API_KEY}`
          );
          const data = await res.json();
          const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
          setNutrition(data.week[today]);
        } catch (err) {
          console.error('Error loading nutrition plan:', err);
        }
      };

      fetchTodayNutrition();
    };

    fetchFutureClasses();
  }, [navigate]);

  // Toggle completion status of a workout task
  const toggleTodo = index => {
    const updatedTodos = [...todos];
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  // Add new workout task
  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { text: newTodo, done: false }]);
    setNewTodo('');
  };

  return (
    <div className="container mx-auto space-y-6 px-4 py-6">
      <h1 className="text-3xl font-bold">Welcome back!</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Upcoming Classes */}
        <div className="rounded-2xl bg-white p-4 shadow">
          <h2 className="mb-2 text-xl font-semibold">Upcoming Classes</h2>
          {futureClasses.length > 0 ? (
            <ul className="space-y-2">
              {futureClasses.map(cls => (
                <li key={cls.id} className="border-b pb-1">
                  <strong>{cls.title}</strong> –{' '}
                  {new Date(cls.start_time).toLocaleDateString('en-GB', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                  })}{' '}
                  at{' '}
                  {new Date(cls.start_time).toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}{' '}
                  with {cls.instructor}
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming classes</p>
          )}
        </div>

        {/* Weekly Workout Plan */}
        <div className="rounded-2xl bg-white p-4 shadow">
          <h2 className="mb-2 text-xl font-semibold">Weekly Workout Plan</h2>
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
                placeholder="Add workout"
                className="flex-1 rounded-l border border-gray-300 px-2 py-1"
              />
              <button
                onClick={addTodo}
                className="cursor-pointer rounded-r bg-blue-500 px-4 text-white hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Nutrition Plan for Today */}
        <div className="rounded-2xl bg-white p-4 shadow">
          <h2 className="mb-2 text-xl font-semibold">Today's Nutrition Plan</h2>
          {!nutrition ? (
            <p className="text-sm text-gray-500">Loading...</p>
          ) : (
            <>
              <ul className="space-y-1 text-sm text-gray-700">
                {nutrition.meals.map(meal => (
                  <li key={meal.id}>
                    {' '}
                    <a
                      href={`https://spoonacular.com/recipes/${meal.title
                        .toLowerCase()
                        .replace(/\s+/g, '-')}-${meal.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {meal.title}
                    </a>{' '}
                    – {meal.readyInMinutes} min
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                <strong>Totals:</strong> {Math.round(nutrition.nutrients.calories)} kcal,{' '}
                {nutrition.nutrients.protein}g protein, {nutrition.nutrients.carbohydrates}g carbs,{' '}
                {nutrition.nutrients.fat}g fat
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
