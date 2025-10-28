import React, { useState, useEffect } from 'react';
import './Login.css';

const Signup = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1: signup, 2: otp
  const [error, setError] = useState('');

  useEffect(() => {
    /* global google */
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: async (response) => {
          // Send response.credential (JWT) to backend for verification
          const res = await fetch('http://localhost:5000/api/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: response.credential }),
          });
          const data = await res.json();
          if (data.token) {
            // Save JWT, redirect, etc.
            alert('Google signup/login successful!');
          } else {
            setError(data.message || 'Google login failed.');
          }
        },
      });
      window.google.accounts.id.renderButton(
        document.getElementById('google-signup-btn'),
        { theme: 'outline', size: 'large', width: 340 }
      );
    }
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email.endsWith('@nau.edu')) {
      setError('Please use your nau.edu email address to sign up.');
      return;
    }
    setError('');
    // TODO: Call backend to send OTP to nau.edu email
    setStep(2);
    alert('OTP sent to your nau.edu email (mock)!');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // TODO: Call backend to verify OTP
    alert('Signup successful (mock)!');
  };

  return (
    <div className="login-outer-container">
      <div className="login-box">
        <h1 className="login-title">Sign up for P2P Marketplace<br/>for College Campuses</h1>
        {step === 1 && (
          <form className="login-form" onSubmit={handleSignup}>
            <div id="google-signup-btn" style={{ marginBottom: 12 }}></div>
            <div className="login-divider"><span>or</span></div>
            <label>Email</label>
            <input
              type="email"
              placeholder="name@nau.edu"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label className="login-label-row">
              Password
              <span className="login-label-hint">Create a password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            {error && <div className="login-error">{error}</div>}
            <button type="submit" className="login-btn">Sign up</button>
          </form>
        )}
        {step === 2 && (
          <form className="login-form" onSubmit={handleVerifyOtp}>
            <label>Enter OTP sent to your nau.edu email</label>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              required
            />
            <button type="submit" className="login-btn">Verify & Complete Signup</button>
          </form>
        )}
        <div className="login-bottom-text">
          Already have an account? <span className="login-link" onClick={onSwitchToLogin}>Log in</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;