import React, { useState } from "react";
import { FaRegSmileWink } from "react-icons/fa";

import { RxAvatar } from "react-icons/rx";
import { RiLockPasswordFill } from "react-icons/ri";

import Login from "./Login";

import styled from "styled-components";
import LoginWith from "./LoginWith";
import Register from "./Register";

interface Props {
  authorised: boolean;
  setAuthorised: Function;
}

interface FormProps {
  authorised: boolean;
}

interface LoadProps {
  loading: boolean;
}

const Form = styled.form<FormProps>`
  display: ${(props) => (props.authorised ? "none" : "flex")};
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
  transform: ${(props) =>
    props.authorised ? "scale(0) translateX(-300px)" : "none"};
  transition: transform 0.5s ease-in-out;  

`;

const Loading = styled.div<LoadProps>`
  border-radius: 10px;
  width: 90%;
  height: 92%;
  margin: auto;
  z-index: 8;
  background: initial;
  color: red;
  backdrop-filter: blur(4px);
  box-shadow: 0px 0px 1500px 1px rgb(0, 200, 3, 0.2) inset;
  position: absolute;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 800;

  && svg {
    color: yellow;
    width: 55px;
    height: 55px;
    margin: 8px;
    padding: 5px;
  }

  && h6 {
    font-size: 25px;
    margin-top: 12px;
    color: rgb(255, 255, 0);
  }
`;

const Author = ({ authorised, setAuthorised }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [login, setLogin] = useState<boolean>(true);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginStatus, setLoginStatus] = useState<string>("");

  const handleLogin = async () => {
    setLoading(true);

    const userCredentials = {
      username: username,
      password: password,
    };

    try {
      const loginResult = await Login(userCredentials);

      if (loginResult) {
        setLoginStatus("Login successful!");

        setAuthorised(true);
        setLoading(false);
      } else {
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginStatus("Error during login.");
    }
  };

  return (
    <>
      {!authorised && !login ? (
        <Form  authorised={authorised} className="form signup">
          <Register />
        </Form>
      ) : (
        <Form authorised={authorised} className="form login">
          <h2>Login Form</h2>

          {loading && (
            <Loading loading={loading}>
              <FaRegSmileWink />
              <h6> Thanks for waiting </h6>
            </Loading>
          )}

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
            <button
              onClick={() => {
                setLogin(false);
              }}
              type="button"
            >
              Sign Up
            </button>
            <button onClick={handleLogin} type="button">
              Login
            </button>
          </div>

          <div className="auth">
            <LoginWith />
          </div>

          {loginStatus && <p>{loginStatus}</p>}
        </Form>
      )}
    </>
  );
};

export default Author;
