import React from "react";
import "../Styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="logo">Heritage</div>

      {/* Center: Search bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search heritage places..." />
        <button>Search</button>
      </div>

      {/* Right: Login */}
      <div className="login-section">
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;
