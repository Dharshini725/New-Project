// src/Pages/LoginPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/LoginPage.css";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      // Save username and redirect to visited places
      localStorage.setItem("currentUser", username.trim());
      navigate("/visited-places");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h2>Login to HeritageXplore</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Enter Your Name:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <button type="submit" className="login-btn">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;