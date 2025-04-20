'use client';
import React, { useState } from 'react';
import './em.css';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function EmailLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({ //ใช้ signInWithPassword โดยรับ email และ password
      email,
      password,
    });

    if (error) {
      setMessage('❌ ' + error.message);
    } else {
      setMessage('✅ Login successful!');
      router.push('/'); 
    }
  };

  return (
    <div className="email-signup-container">
      <h1 className="title">Login</h1>
      <p className="subtext">
        Not have an account? <Link href="/sign">Sign Up</Link>
      </p>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="signup-btn">Login</button>
        {message && <p>{message}</p>}
      </form>

      <div className="divider">
        <span>or Log in with</span>
      </div>

      <div className="social-buttons">
        <button className="google-btn" onClick={async () => {
          const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
          if (error) console.error('Google Login Error:', error.message);
        }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIl8zC8WAMHi5JVmKUb3YVvZd5gvoCdy-NQ&s"
            alt="Google"
          />
        </button>
      </div>
    </div>
  );
}
