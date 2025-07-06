import React from 'react';
import { motion } from 'framer-motion';

// Home page component for GymX web app
function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section with Background Image and Overlay */}
      <section className="relative w-full h-[600px]">
        {/* Full-width background image */}
        <img
          src="/header.png"
          alt="Gym Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for contrast and readability */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        {/* Centered animated content using Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex h-full w-full items-center justify-center flex-col px-4 text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Welcome to <span className="text-blue-400">GymX</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl mb-8">
            Transform your body and mind with personalized workouts and full support.
          </p>
          <a
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full font-semibold text-white shadow-lg"
          >
            Get Started
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Our <span className="text-blue-600">Services</span>
          </h2>

          {/* Grid of services with animations */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Strength Training',
                desc: 'Modern equipment to target all major muscle groups.',
              },
              {
                title: 'Group Classes',
                desc: 'Zumba, HIIT, Yoga, and more with certified instructors.',
              },
              {
                title: 'Personal Trainer',
                desc: 'Custom training and nutrition plans tailored to your goals.',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">What Our Members Say</h2>
          <div className="space-y-10">
            {[
              {
                text: '“I’ve never felt so motivated! The trainers are amazing and the atmosphere is great.”',
                name: 'John S.',
              },
              {
                text: '“After just 3 months, I’ve already seen huge results. Highly recommended!”',
                name: 'Martha L.',
              },
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="text-lg italic text-gray-600"
              >
                {t.text}
                <br />
                <span className="font-semibold text-blue-600 block mt-2">– {t.name}</span>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-blue-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Join our community today and achieve your fitness goals!
        </p>
        <a
          href="/register"
          className="bg-white text-blue-600 px-8 py-3 font-semibold rounded-full shadow hover:bg-gray-100 transition"
        >
          Sign Up Now
        </a>
      </section>
    </div>
  );
}

export default HomePage;
