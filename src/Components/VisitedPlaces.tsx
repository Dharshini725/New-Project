// src/Pages/VisitedPlaces.tsx
import React, { useState, useEffect } from "react";
import "../Styles/VisitedPlaces.css";

const VisitedPlaces: React.FC = () => {
  const [visitedPlaces, setVisitedPlaces] = useState<string[]>([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Load visited places and username
    const savedPlaces = localStorage.getItem("visitedPlaces");
    const savedUser = localStorage.getItem("currentUser");
    
    if (savedPlaces) {
      setVisitedPlaces(JSON.parse(savedPlaces));
    }
    if (savedUser) {
      setUsername(savedUser);
    }
  }, []);

  return (
    <div className="visited-places-container">
      <div className="visited-places-content">
        <h1>Welcome, {username}!</h1>
        <h2>Your Visited Heritage Sites</h2>
        
        {visitedPlaces.length > 0 ? (
          <div className="places-list">
            <ul>
              {visitedPlaces.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="no-places">
            <p>No places visited yet. Start exploring!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisitedPlaces;