import React from 'react';
import { motion } from "framer-motion";
import Navbar from '../components/NavbarPublic';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
      <div className="relative h-[500px] w-full overflow-hidden">
  {/* Imagem de fundo */}
  <img
    src="/header.png"
    alt="Gym Banner"
    className="absolute inset-0 h-full w-full object-cover z-0"
  />
  {/* Filtro de cor */}
  <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

  {/* Conteúdo animado por cima */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-20 flex h-full flex-col items-center justify-center text-white text-center px-4"
  >
    <h1 className="mb-4 text-4xl md:text-5xl font-bold">Bem-vindo ao GymX!</h1>
    <p className="max-w-xl text-lg md:text-xl mb-6">
      Transforme o seu corpo e a sua mente com os nossos treinos personalizados.
    </p>
    <button className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer transition-colors text-white font-semibold px-6 py-3 rounded-2xl shadow-lg" href="/register">
      Comece Agora
    </button>
  </motion.div>
</div>

      {/* Serviços */}
      <section id="services" className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">Os Nossos Serviços</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-6 shadow">
              <h3 className="mb-2 text-xl font-semibold text-blue-600">Musculação</h3>
              <p className="text-gray-700">
                Equipamento moderno para fortalecer todos os grupos musculares.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 shadow">
              <h3 className="mb-2 text-xl font-semibold text-blue-600">Aulas em Grupo</h3>
              <p className="text-gray-700">
                Zumba, HIIT, Yoga e muito mais, com instrutores certificados.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 shadow">
              <h3 className="mb-2 text-xl font-semibold text-blue-600">Personal Trainer</h3>
              <p className="text-gray-700">
                Planos de treino e nutrição personalizados para atingir os seus objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">O que dizem os nossos membros</h2>
          <div className="space-y-8">
            <blockquote className="text-gray-600 italic">
              “Nunca me senti tão motivado! Os treinadores são incríveis e o ambiente é excelente.”
              <br />
              <span className="font-semibold text-blue-600">– João S.</span>
            </blockquote>
            <blockquote className="text-gray-600 italic">
              “Depois de apenas 3 meses, já notei grandes resultados. Super recomendo!”
              <br />
              <span className="font-semibold text-blue-600">– Marta L.</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Chamada para ação */}
      <section className="bg-blue-600 px-4 py-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Pronto para começar a sua transformação?</h2>
        <p className="mb-6 text-lg">
          Junte-se à nossa comunidade hoje e alcance os seus objetivos de fitness!
        </p>
        <a
          href="#contact"
          className="rounded bg-white px-6 py-2 font-semibold text-blue-600 transition hover:bg-gray-200"
        >
          Inscreva-se Já
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
