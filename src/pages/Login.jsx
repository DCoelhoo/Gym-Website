import React from "react";
import Navbar from "../components/NavbarPublic";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { supabase } from '../supabase/supabaseClient';

function Login() {
  const navigate = useNavigate();

  // Form state
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Attempt to sign in using Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setErrorMsg(error.message); // Show error message
    } else {
      navigate('/dashboard'); // Redirect on success
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-[90vh] bg-gray-100">
        <div className="flex w-full max-w-7xl h-[80vh] bg-white rounded-lg shadow overflow-hidden">
          
          {/* Left-side image (hidden on small screens) */}
          <div className="w-1/2 h-full hidden md:block">
            <img
              src="/form.jpg"
              alt="Fitness"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Login form on the right */}
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Login</h2>
            <form className="space-y-6" onSubmit={handleLogin}>
              
              {/* Email field */}
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password field */}
              <div>
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-blue-600 cursor-pointer text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Log In
              </button>

              {/* Link to registration */}
              <p className="text-center">
                Don't have an account?{" "}
                <a className="text-blue-500" href="/register">
                  Create one!
                </a>
              </p>
            </form>

            {/* Error message */}
            {errorMsg && <p className="text-red-600 mt-4 text-center">{errorMsg}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
