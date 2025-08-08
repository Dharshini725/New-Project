import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Homepage.css";

const Homepage: React.FC = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleStartJourney = () => {
    if (location.trim() !== "") {
      const formattedLocation = location.trim().toLowerCase();
      navigate(`/explore/${formattedLocation}`);
    }
  };

  return (
    <main>
      <section id="hero">
        <div className="hero-content">
          <h1>Welcome to HeritageXplore</h1>
          <p>Discover India’s Glorious Past</p>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter a location (e.g., Delhi)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleStartJourney}>Start Your Journey</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
