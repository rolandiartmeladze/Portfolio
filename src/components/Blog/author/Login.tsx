import React, { useState, useEffect } from "react";
import "../CreatNewPost/NewPost.css";
import { useNavigate } from "react-router-dom";

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
        console.log(auth);

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
        const token = data.token;
        console.log(token)
        // Save token in local storage or state for future API requests
        localStorage.setItem("token", token);

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
        <h3>Add New Post</h3>

        <div className="line-cont">
          <label htmlFor="username">Username:</label>{" "}
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
        </div>

        <div className="line-cont">
          <label htmlFor="password">Password:</label>{" "}
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
        </div>

        <div className="btn-cont">
          <button type="submit">Add Post</button>
        </div>
      </form>
    </>
  );
};
export default Login;
