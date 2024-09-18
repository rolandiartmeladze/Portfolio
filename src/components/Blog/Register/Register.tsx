import React, { useState } from 'react';
const jwtDecode = require('jwt-decode');

// Option 2: If Option 1 doesn't work, try the named import
// import { default as jwtDecode } from 'jwt-decode';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== password2) {
      setError('Passwords do not match');
      return;
    }

    const user = {
      username: username,
      email: email,
      password: password,
      password2: password2,
    }

    console.log(user)

    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.detail || 'Registration failed');
      }

      const data = await response.json();
      if (data.token) {
        const decodedToken = jwtDecode(data.token);
        console.log('Decoded token info:', decodedToken);
      }

      setSuccess('Registration successful! Please log in.');
      setError('');

    } catch (error: any) {
      console.error('Registration error', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
    </div>
  );
};

export default Register;
