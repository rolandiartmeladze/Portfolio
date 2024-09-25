import React, { useState } from "react";
// import './styles.css';

import { RxAvatar } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";

import Login from './Login'

import styled from "styled-components";

interface Props {
    authorised: boolean 
    setAusorised: Function;
}

interface FormProps {
  authorised: boolean;
}
const Form = styled.form<FormProps>`
  display: ${(props) => (props.authorised ? 'none' : 'flex')};
  width: 38%;
  max-width: 320px;
  height: auto;
  background: initial
  margin-top: 25px;
  margin-left: 12px;
  margin-right: 11px;
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  box-shadow: 0px 0px 150px rgb(255, 255, 255, 0.1) inset, 0px 0px 3px rgb(0, 255, 255);
  border-radius: 10px;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  transform: ${(props) => (props.authorised ? 'scale(0) translateX(-300px)' : 'none')};
  transition: transform 0.5s ease-in-out;  

`;

const Author = ({authorised, setAusorised}:Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginStatus, setLoginStatus] = useState<string>(''); 

  const handleLogin = async () => {
    const userCredentials = {
      username: username,
      password: password,
    };

    try {
      const loginResult = await Login(userCredentials);
      
      if (loginResult) {
        setLoginStatus("Login successful!"); 
      
        setAusorised(true);
      } else {
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginStatus("Error during login.");
    }
  };

  return (
    <Form authorised={authorised} className="form login">
      <h2>Login Form</h2>

      <div className="line-cont">
        <RxAvatar />
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
          type="password"
          placeholder="Password"
        />
      </div>

      <div className="btn-cont">
        <button type="button">Sign Up</button>
        <button onClick={handleLogin} type="button">
          Login
        </button>
      </div>

      <div className="auth">
        <h3>Login With:</h3>
        <FaFacebook />
        <FcGoogle />
        <FaGithub />
      </div>

      {loginStatus && <p>{loginStatus}</p>} {/* Display login status */}
    </Form>
  );
};

export default Author;
