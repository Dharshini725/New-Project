// src/Components/HeroSection.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";


const Hero: React.FC = () => {
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate("/explore"); // ✅ make sure you have a route for /explore
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
        <button className="explore-btn" onClick={() => navigate("/explore")}>
          Explore Now
        </button>
      </div>
    </div>


          
    );
};

export default Hero;
