import React, { useState } from 'react';
import { RxAvatar } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
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
      console.log(data);
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
      <form onSubmit={handleSubmit} id="postform" className="form signup">
        <h2>Login Form</h2>

        <div className="line-cont">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="line-cont">
          <label htmlFor="fullname"></label>
          <input
            id="fullname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="full name"
          />
        </div>
        <div className="line-cont">
          < RxAvatar />
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="line-cont">
          <label htmlFor="">email</label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="line-cont">
          <label htmlFor="">password</label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
        </div>

        <div className="line-cont">
          <label htmlFor="">rep password</label>
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
        </div>

        <div className="btn-cont">
        <button>Sign Up</button>
        <button type="submit">Login</button>
        </div>

        <div className="auth">
          <h3> Login With: </h3>

            <FaFacebook /> 
            <FcGoogle />          
            <FaGithub />

          </div>
      </form>
    </div>
  );
};

export default Register;
