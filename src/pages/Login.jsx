import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[90vh] bg-gray-100">
        <div className="flex w-full max-w-7xl h-[80vh] bg-white rounded-lg shadow overflow-hidden">
          {/* Imagem à esquerda */}
          <div className="w-1/2 h-full hidden md:block">
            <img
              src="/form.jpg"
              alt="Fitness"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Formulário à direita */}
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Login</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Login
              </button>
              <p className="text-center">Ainda não tem conta? <a className="text-blue-500" href="/register" >Crie uma!</a></p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
