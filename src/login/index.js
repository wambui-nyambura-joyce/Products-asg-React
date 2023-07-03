import React, { useState } from "react";
import "./style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log(data);

    try {
      // Perform your API call here
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);

      // Show success notification
      setNotification("Login successful!");

      // Clear input fields
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error.message);

      // Show error notification
      setNotification("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          placeholder="Enter username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        {notification && <p className="notification">{notification}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;