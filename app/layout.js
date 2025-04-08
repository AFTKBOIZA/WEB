// app/layout.js
import './globals.css';
import Link from 'next/link';
import { FaHome, FaUser, FaSearch } from 'react-icons/fa';

export const metadata = {
  title: 'My Web App',
  description: 'A cool restaurant app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: '#ffe4d6', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <nav style={{ display: 'flex', gap: '2rem', fontWeight: 'bold' }}>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Menu">Food Menu</Link>
            <Link href="/Booking">Book Table</Link>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaHome />
            <input type="text" placeholder="Search..." style={{ padding: '0.3rem' }} />
            <FaSearch />
            <FaUser />
          </div>
        </header>

        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}