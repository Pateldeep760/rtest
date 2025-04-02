import React, { useState } from 'react';
import './Us11.scss';

const Us11 = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Username: ${username}\nPassword: ${password}`); 
  };

  return (
    <div className="Us11Main">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Us11;