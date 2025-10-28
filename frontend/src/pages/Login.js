import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = ({ onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
            alert('Google login successful!');
          } else {
            setError(data.message || 'Google login failed.');
          }
        },
      });
      window.google.accounts.id.renderButton(
        document.getElementById('google-login-btn'),
        { theme: 'outline', size: 'large', width: 340 }
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.endsWith('@nau.edu')) {
      setError('Please use your nau.edu email address for authentication.');
      return;
    }
    setError('');
    // TODO: Add API call for authentication here
    alert('Login successful (mock)!');
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth login restricted to nau.edu domain
    alert('Google login (mock): Only nau.edu allowed');
  };

  return (
    <div className="login-outer-container">
      <div className="login-box">
        <h1 className="login-title">Login to P2P Marketplace<br/>for College Campuses</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div id="google-login-btn" style={{ marginBottom: 12 }}></div>
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
            <span className="login-label-hint">Enter your password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <div className="login-error">{error}</div>}
          <button type="submit" className="login-btn">Log in</button>
        </form>
        <div className="login-bottom-text">
          Don't have an account? <span className="login-link" onClick={onSwitchToSignup}>Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default Login;