// src/Components/AboutCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AboutCard.css";

const AboutCard: React.FC = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <div className="about-card-container">
      <div className="about-card" onClick={handleAboutClick}>
        <div className="about-card-content">
          <h2>About HeritageXplore</h2>
          <p>Discover the rich cultural heritage of India through our curated collection of historical sites and monuments.</p>
          <div className="about-card-cta">Click to learn more about us</div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;