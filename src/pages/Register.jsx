import React, { useState } from 'react';
import Navbar from '../components/NavbarPublic';
import Footer from '../components/Footer';
import { supabase } from '../supabase/supabaseClient';

function Register() {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Supabase signup call
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(`Registration error: ${error.message}`);
      return;
    }

    setMessage('User created successfully!');
  };

  return (
    <>
      <div className="flex min-h-[90vh] items-center justify-center bg-gray-100">
        <div className="flex h-[80vh] w-full max-w-7xl overflow-hidden rounded-lg bg-white shadow">
          
          {/* Left-side image */}
          <div className="hidden h-full w-1/2 md:block">
            <img src="/form.jpg" alt="Fitness" className="h-full w-full object-cover" />
          </div>

          {/* Right-side registration form */}
          <div className="flex w-full flex-col justify-center p-12 md:w-1/2">
            <h2 className="mb-8 text-center text-3xl font-bold text-blue-600">Create Account</h2>

            {/* Feedback message (success or error) */}
            {message && (
              <div className="mb-4 rounded bg-red-100 p-3 text-sm text-red-700">
                {message}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="mt-1 w-full rounded border p-3"
                />
              </div>

              {/* Email Field */}
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

              {/* Password Field */}
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="mt-1 w-full rounded border p-3"
                />
              </div>

              {/* Phone Field (currently unused in backend logic) */}
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="number"
                  name="phone"
                  required
                  className="mt-1 w-full rounded border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  required
                  className="mt-1 w-full rounded border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded bg-blue-600 py-3 text-white transition hover:bg-blue-700 cursor-pointer"
              >
                Register
              </button>

              {/* Login Redirect */}
              <p className="text-center">
                Already have an account?{' '}
                <a className="text-blue-500" href="/login">
                  Log in here!
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
