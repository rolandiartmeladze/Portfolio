import React, { useState} from "react";
import { RxAvatar } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";

import "./style.css";

const jwtDecode = require('jwt-decode').default;

const Login: React.FC = () => {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const auth = {
      username: username,
      password: password,
    };
      console.log(auth);
      
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(auth),
        credentials: "include", 
      });
  
      if (response.ok) {
        const data = await response.json();
        const accessToken = data.access;
        const refreshToken = data.refresh;
  
        const user = {
          username: data.username,
          email: data.email,
          lastname: data.lastname,
          firstname: data.firstname,
        };

        const info = {
          user: user,
          accessToken: accessToken,
          refreshToken: refreshToken,

        }
        console.log(info);
        BackInfoInLocalStorage(info);  
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

    const BackInfoInLocalStorage = (info: any) =>{

      localStorage.setItem("accessToken", info.accessToken);
      localStorage.setItem("refreshToken", info.refreshToken);
      localStorage.setItem("user", JSON.stringify(info.user));

    }

  return (
      <form onSubmit={handleSubmit} id="postform" className="form login">
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
  );
};
export default Login;
