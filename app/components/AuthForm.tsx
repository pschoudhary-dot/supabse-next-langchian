// app/components/AuthForm.tsx
"use client";

import { useState } from 'react';
import { supabase } from '@/utils/supabase/supabaseClient';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      // Login
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage(`Login error: ${error.message}`);
      } else {
        setMessage('Logged in successfully!');
      }
    } else {
      // Sign up
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setMessage(`Signup error: ${error.message}`);
      } else {
        setMessage('Signup successful! Please check your email for confirmation.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 border rounded">
      <h2 className="text-xl mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p className="mt-4 text-sm">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button onClick={() => setIsLogin(!isLogin)} className="underline">
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}
