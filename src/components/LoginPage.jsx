import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid username or password');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4">
    <form
      onSubmit={handleLogin}
      className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md"
    >
      <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
        Welcome Back 👋
      </h2>
  
      {/* Username */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Username</label>
        <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">
          <svg
            className="w-5 h-5 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5.121 17.804A9.004 9.004 0 0012 21a9.004 9.004 0 006.879-3.196M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
      </div>
  
      {/* Password */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Password</label>
        <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">
          <svg
            className="w-5 h-5 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 11c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z" />
            <path d="M17 11V7a5 5 0 00-10 0v4m-2 0a2 2 0 012 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 012-2z" />
          </svg>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
  
      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
      )}
  
      {/* Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-2 rounded-md font-semibold shadow-sm"
      >
        Login
      </button>
  
      {/* Footer */}
      <p className="text-sm text-center text-gray-500 mt-6">
        Don’t have an account? <span className="text-indigo-600 cursor-pointer hover:underline">Sign up</span>
      </p>
    </form>
  </div>
  
  );
}

export default LoginPage;
