// src/Components/HeroSection.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    const siteName = "Brihadeeswarar Temple"; // Hero site
    navigate(`/explore/${encodeURIComponent(siteName)}`);
  };

  return (
    <div className="hero-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        src="/videos/btemple.mp4"
      />

      <div className="hero-overlay">
        <h1 className="hero-quote">
          “The Brihadeeswarar Temple – A timeless marvel of Chola architecture”
        </h1>
        <button className="explore-btn" onClick={handleExplore}>
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
