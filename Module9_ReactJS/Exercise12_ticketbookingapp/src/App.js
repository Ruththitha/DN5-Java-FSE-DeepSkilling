import React, { useState } from 'react';
import Guest from './components/Guest';
import User from './components/User';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  // Element variable
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogout} />;
  } else {
    button = <LoginButton onClick={handleLogin} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Ticket Booking App</h1>
        {button}
      </header>

      {/* Conditional rendering based on login state */}
      {isLoggedIn ? <User /> : <Guest />}
    </div>
  );
}

export default App;