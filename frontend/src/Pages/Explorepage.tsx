import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ExplorePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const city = location?.state?.location || "Unknown";

  // Example data for now
  const heritageSites = [
    { name: "Red Fort", image: "/images/redfort.jpg" },
    { name: "Qutub Minar", image: "/images/qutub.jpg" },
    { name: "Humayun’s Tomb", image: "/images/humayun.jpg" },
    { name: "India Gate", image: "/images/indiagate.jpg" },
  ];

  return (
    <div className="explore-container">
      <h1>Famous Heritage Sites in {city}</h1>
      <div className="card-grid">
        {heritageSites.map((site, index) => (
          <div key={index} className="heritage-card">
            <img src={site.image} alt={site.name} />
            <h3>{site.name}</h3>
            <button
              onClick={() => navigate("/details", { state: { placeName: site.name } })}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorePage;
