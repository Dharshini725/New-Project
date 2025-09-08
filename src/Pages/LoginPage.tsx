import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/LoginPage.css";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      const userKey = `user_${username.trim()}`;
      
      // Check if user exists in localStorage
      const existingUser = localStorage.getItem(userKey);
      
      if (!existingUser) {
        // Initialize visited places for new user
        const userData = {
          username: username.trim(),
          visitedPlaces: []
        };
        localStorage.setItem(userKey, JSON.stringify(userData));
      }
      
      // Set current user session
      localStorage.setItem("currentUser", username.trim());
      
      // Redirect to visited places
      navigate("/profile");
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