'use client';
import './globals.css';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://sniepxybkdbdqifcepff.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuaWVweHlia2RiZHFpZmNlcGZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4OTUxNjAsImV4cCI6MjA2MDQ3MTE2MH0.rS_FCbID9prXVQ7mnUIdCodplDBIjViYpc0_TeUFOXc'
);

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <html lang="en">
      <body>
        <header>
          <nav className="nav-left">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/menu">Food Menu</Link>
            <Link href="/booking">Book Table</Link>
          </nav>

          <div className="nav-right">
            {user ? (
              <>
                {user.user_metadata?.avatar_url ? (
                  <img src={user.user_metadata.avatar_url} alt="avatar" />
                ) : (
                  <FaUser />
                )}
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <Link href="/sign" className="login-link">
                <FaUser />
                <span>Log in</span>
              </Link>
            )}
          </div>
        </header>

        <main style={{ padding: '2rem' }}>{children}</main>
      </body>
    </html>
  );
}
