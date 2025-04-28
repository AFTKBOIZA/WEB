'use client';
import './globals.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Layout({ children }) { 
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
            <Link href="/about2">About</Link>
            <Link href="/menu1">Food Menu</Link>
            <Link href="/booking1">Book Table</Link>
            <Link href="/history">YourBooking</Link>
          </nav>

          <div className="nav-right">
            {user ? (
              <div>
                 {user.user_metadata?.avatar_url ? (
                  <img src={user.user_metadata.avatar_url} />
                ) : ( <FaUser />)}
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/sign" className="login-link">
                <FaUser />
                <span>Log in</span>
              </Link>
            )}
          </div>
        </header>

        <main >{children}</main>
      </body>
    </html>
    
  );
}