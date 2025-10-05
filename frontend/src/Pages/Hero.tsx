import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css"; 
import btemple from "../videos/btemple.mp4"; 

const Hero = () => {
  const navigate = useNavigate();

  // 👇 function to navigate to AI Details page
  const handleExploreClick = () => {
    navigate("/aidetailspage", { state: { placeName: "Brihadeeswarar Temple" } });
  };

  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src={btemple} type="video/mp4" />
      </video>

      <div className="hero-content">
        <h1 className="hero-title">Brihadeeswarar Temple</h1>
        <p className="hero-subtitle">
          Step into the magnificent world of Chola architecture and explore history with AI-powered insights.
        </p>
        <button className="explore-button" onClick={handleExploreClick}>
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
