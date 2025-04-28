'use client';
import { useState } from 'react';
import './his.css'; 
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function BookingHistoryPage() { 
  const [bookings, setBookings] = useState([]);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleCheckBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);
    setNotFound(false);

    const { data, error } = await supabase 
      .from('booking')
      .select('*')
      .eq('email', email.trim())
      .order('booking_date', { ascending: false });

    if (!error) { 
      setBookings(data);
      if (data.length === 0) setNotFound(true); 
    }

    setLoading(false);
  };

  const cancelBooking = async (id) => {  
    const { error } = await supabase.from('booking').delete().eq('id', id); 
    if (!error) {
      setBookings(bookings.filter((b) => b.id !== id)); 
    }
  };

  return ( 
    <div className="booking-history-container">
      <h2>📬 ตรวจสอบประวัติการจอง</h2>

      <form onSubmit={handleCheckBooking} className="booking-form">
        <input
          type="email"
          placeholder="กรอกอีเมลที่ใช้จอง"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">🔍 ตรวจสอบ</button>
      </form>

      {loading && <p>⏳ กำลังโหลด...</p>}

      {submitted && bookings.length > 0 && (
        bookings.map((b) => (
          <div key={b.id} className="booking-card">
            <p><strong>DATE:</strong> {b.booking_date}</p>
            <p><strong>TIME:</strong> {b.booking_time}</p>
            <p><strong>GUEST:</strong> {b.guests}</p>
            <p><strong>REQUEST:</strong> {b.specialRequest || '-'}</p>
            <button onClick={() => cancelBooking(b.id)} className="cancel-btn">
              ❌ ยกเลิกการจอง
            </button>
          </div>
        ))
      )}

      {notFound && <p>❌ ไม่พบการจองในระบบสำหรับอีเมลนี้</p>}
    </div>
  );
}
