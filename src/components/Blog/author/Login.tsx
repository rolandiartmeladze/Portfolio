import React, { useState, useEffect } from "react";
import { RxAvatar } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";

import "./style.css";
import { useNavigate } from "react-router-dom";

const jwtDecode = require('jwt-decode').default;

const Login: React.FC = () => {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(auth),
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.access;
        const refreshToken = data.refresh;
        const user = {
          username: data.username,
          email: data.email,
        };

        console.log("Access Token:", accessToken);
        console.log("User Info:", user);

        // Decode JWT to verify token information if needed
        const decodedToken = jwtDecode(accessToken);
        console.log("Decoded token info:", decodedToken);

        // Save token and user info in local storage or state for future API requests
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(user));

        // Navigate to user profile after successful login
        navigate("/user_profile");
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="postform" className="add-post">
        <h2>Login Form</h2>

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
          <RiLockPasswordFill />
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
        </div>

        <div className="btn-cont">
        <button>Sing Up</button>
        <button type="submit">Login</button>
        </div>

        <div className="auth">
          <h3> Login With: </h3>

            <FaFacebook /> 
            <FcGoogle />          
            <FaGithub />

          </div>
      </form>
    </>
  );
};
export default Login;
