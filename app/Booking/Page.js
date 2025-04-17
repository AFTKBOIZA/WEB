'use client';
import React, { useEffect, useState } from 'react';
import './Book.css';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const BookingPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const today = new Date().toISOString().split('T')[0]; // 🔸 ใช้เป็น min ของ input

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const user = session?.user;

      if (user) {
        setName(user.user_metadata.full_name || user.user_metadata.name || '');
        setEmail(user.email || '');
      }
    };

    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedDate = new Date(date);
    const currentDate = new Date(today);

    if (selectedDate < currentDate) {
      setMessage('❌ Cannot book a past date.');
      return;
    }

    const { error } = await supabase.from('booking').insert([
      {
        name,
        email,
        booking_date: date,
        booking_time: time,
      },
    ]);

    if (error) {
      console.error('Booking failed:', error.message);
      setMessage('❌ Booking failed. Please try again.');
    } else {
      setMessage('✅ Booking successful!');
      setDate('');
      setTime('');
    }
  };

  return (
    <div className="booking-wrapper">
      <div className="booking-form">
        <h2>Book Your Table</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>E-mail</label>
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Date</label>
          <input
            type="date"
            required
            min={today} // ✅ ป้องกันเลือกวันก่อนหน้า
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Time</label>
          <input
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">Book Now</button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
