import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Register';

function App() {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="App">
      {showSignup ? (
        <Signup onSwitchToLogin={() => setShowSignup(false)} />
      ) : (
        <Login onSwitchToSignup={() => setShowSignup(true)} />
      )}
    </div>
  );
}

export default App;
