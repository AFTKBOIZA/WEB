'use client';
import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaUser, FaSearch } from 'react-icons/fa';

export default function RootLayout({ children }) {
  const [search, setSearch] = useState('');

  return (
    <html lang="en">
      <body>
        <header>
          <nav className="nav-left">
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Menu">Food Menu</Link>
            <Link href="/Booking">Book Table</Link>
          </nav>
        
          <div className="nav-right search-container">
            <FaHome />
            <FaSearch />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <span className="clear-button" onClick={() => setSearch('')}>
                ×
              </span>
            )}
            <FaSearch style={{ cursor: 'pointer' }} />
            <FaUser />
            
          </div>
          
        </header>
        

        <main style={{ padding: '2rem' }}>{children}</main>
        
      </body>
    </html>
  );
  
  
}
