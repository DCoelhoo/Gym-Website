import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { supabase } from '../supabase/supabaseClient';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (error) {
      setMessage(`Erro no registo: ${error.message}`);
      return;
    }
  
    setMessage("Utilizador criado com sucesso!");
  };
  

  return (
    <>
      <Navbar />
      <div className="flex min-h-[90vh] items-center justify-center bg-gray-100">
        <div className="flex h-[80vh] w-full max-w-7xl overflow-hidden rounded-lg bg-white shadow">
          {/* Imagem à esquerda */}
          <div className="hidden h-full w-1/2 md:block">
            <img src="/form.jpg" alt="Fitness" className="h-full w-full object-cover" />
          </div>

          {/* Formulário à direita */}
          <div className="flex w-full flex-col justify-center p-12 md:w-1/2">
            <h2 className="mb-8 text-center text-3xl font-bold text-blue-600">Criar Conta</h2>
                    {/* Exibição da mensagem de erro ou sucesso */}
        {message && (
          <div className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
            {message}
          </div>
        )}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700">Nome</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="mt-1 w-full rounded border p-3"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="mt-1 w-full rounded border p-3"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={e => setpassword(e.target.value)}
                  className="mt-1 w-full rounded border p-3"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="number"
                  name="phone"
                  required
                  className="mt-1 w-full rounded border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Data de Nascimento</label>
                <input
                  type="date"
                  name="dob"
                  required
                  className="mt-1 w-full rounded border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full rounded bg-blue-600 py-3 text-white transition hover:bg-blue-700 cursor-pointer"
              >
                Registar
              </button>
              <p className="text-center">
                Já tem conta?{' '}
                <a className="text-blue-500" href="/login">
                  Faça Login!
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
