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

  useEffect(() => { //ใช้ useEffect เพื่อดึงข้อมูล session ของผู้ใช้จาก Supabase
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession(); 
      setUser(session?.user ?? null); 
    };

    getSession();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => { 
      setUser(session?.user ?? null); //อัปเดตสถานะเมื่อมีการเปลี่ยนแปลง
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