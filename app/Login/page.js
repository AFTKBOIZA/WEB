// app/Signup/page.js
'use client';
import React from 'react';
import './signup.css'; // ไฟล์ CSS สำหรับตกแต่ง
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

const handleGoogleSignup = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    console.error('Google Sign In Error:', error.message);
  }
};

export default function SignupPage() {
  const clientId = '249244386691-culs91tgfroh5kjqf1defk9tpvfnnape.apps.googleusercontent.com';
  return (
    <div className="signup-container">
      <h1 className="signup-title">Login Up</h1>
      <p className="signup-subtext">
        not have a account? <a href="/Signup">Sign Up</a>
      </p>

      <div className="signup-box">
      <button className="btn google" onClick={handleGoogleSignup}>
  <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google" />
  Login with Google
</button>



        <div className="divider">
          <span>or</span>
        </div>
        <Link href="/Login/Email">
        <button className="btn email">Login with email</button>
        </Link>
      </div>
    </div>
  );
}
