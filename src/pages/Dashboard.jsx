import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabaseClient';
import NavbarPrivate from '../components/navbarPrivate';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate('/');
      }
    };

    checkAuth();
  }, [navigate]);

  {/* State for Todos List */}
  const [todos, setTodos] = useState([
    { text: "Pull Day", done: false },
    { text: "Cardio 30min", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { text: newTodo, done: false }]);
    setNewTodo("");
  };

  return (
<div className="space-y-6">
      <h1 className="text-3xl font-bold">Bem-vindo de volta!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-2">Próxima Aula</h2>
          <p>Zumba - 18:00h com Ana</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-2">Plano de Treino da Semana</h2>
          <div className="space-y-2">
            {todos.map((todo, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(index)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className={todo.done ? "line-through text-gray-400" : ""}>{todo.text}</span>
              </div>
            ))}
            <div className="flex mt-2">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Adicionar treino"
                className="flex-1 border border-gray-300 rounded-l px-2 py-1"
              />
              <button
                onClick={addTodo}
                className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600 cursor-pointer"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-2">Dica Nutricional</h2>
          <p>Inclui proteína em cada refeição para melhor recuperação muscular.</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Resumo Semanal</h2>
        <ul className="space-y-2">
          <li>3 aulas assistidas</li>
          <li>2 treinos concluídos</li>
          <li>1 refeição não registada</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
