import React, { useRef } from 'react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaUserAlt } from 'react-icons/fa';
import { FaRepeat } from "react-icons/fa6";

import { IoTextSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import './style.css';
import LoginWith from './LoginWith';
// import jwtDecode from 'jwt-decode'; 

interface UserProps {
  id: string;
  type: string;
  placeholder: string;
  icon: React.ComponentType;
}

interface Props {
  setSignUp: Function;
}

const Register = () => {
  // Using useRef to create references for inputs
  const usernameRef = useRef<HTMLInputElement>(null);
  const firstnameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);

  const SignUpBtn = async () => {
    // e.preventDefault();
    const user = {
      username: usernameRef.current?.value,
      first_name: firstnameRef.current?.value,
      last_name: lastnameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      password2: password2Ref.current?.value,
    };

    console.log(user)

    if (user.password !== user.password2) {
      alert('Passwords do not match');
      return;
    }


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
        // const decodedToken = jwtDecode(data.token);
        // console.log('Decoded token info:', decodedToken);
      }

      alert('Registration successful! Please log in.');
    } catch (error: any) {
      console.error('Registration error', error);
      alert(error.message);
    }
  };

  const UserInfo: UserProps[] = [
    { id: 'username', type: 'text', placeholder: 'Username', icon: FaUserAlt },
    { id: 'firstname', type: 'text', placeholder: 'Enter First Name', icon: IoTextSharp },
    { id: 'lastname', type: 'text', placeholder: 'Enter Last Name', icon: IoTextSharp },
    { id: 'email', type: 'email', placeholder: 'Enter Email', icon: MdEmail },
    { id: 'password', type: 'password', placeholder: 'Enter Password', icon: RiLockPasswordFill },
    { id: 'password2', type: 'password', placeholder: 'Confirm Password', icon: FaRepeat },
  ];

  const SignUpForm = () => {
    const refs = {
      username: usernameRef,
      firstname: firstnameRef,
      lastname: lastnameRef,
      email: emailRef,
      password: passwordRef,
      password2: password2Ref,
    };

    return (
      <>
        {UserInfo.map((item, index) => (
          <div className="line-cont" key={index}>
            <item.icon />
            <input
              id={item.id}
              type={item.type}
              placeholder={item.placeholder}
              ref={refs[item.id as keyof typeof refs]} // Use ref to store the input element
            />
          </div>
        ))}
      </>
    );
  };

  const login = () =>{

    const loginelement = document.querySelector('.login');
    const element = document.querySelector('.signup');
    if (element) {
      element.classList.remove('add');
    }

    setTimeout(() => {
          if (loginelement) {
      loginelement.classList.add('add');
    }
      // setSignUp(false);
    }, 600);

 }


  return (
<>
      <h2>Register Form</h2>
      <SignUpForm />
      <div className="btn-cont">
        <button onClick={SignUpBtn}>Sign Up</button>
        <button type='button' onClick={login}>Login</button>

      </div>
      <div className="auth">
       <LoginWith />
      </div>
</>    
  );
};

export default Register;
