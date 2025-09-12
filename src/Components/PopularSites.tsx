import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/PopularSites.css";

const popularSites = [
  {
    name: "Taj Mahal",
    location: "Agra, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg", 
  },
  {
    name: "Qutub Minar",
    location: "Delhi, India",
    image: "https://plus.unsplash.com/premium_photo-1697729438410-d53c666e3810?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cXV0dWIlMjBtaW5hciUyMG5ldyUyMGRlbGhpfGVufDB8fDB8fHww", // 🔹 Add your own image link here
  },
  {
    name: "Hawa Mahal",
    location: "Jaipur, India",
    image: "https://t3.ftcdn.net/jpg/02/16/44/20/360_F_216442060_oORACP7fDjwMhUITLLQy4RTNc0xGpJwU.jpg", 
  },
  {
    name: "Gateway of India",
    location: "Mumbai, India",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Historical_Gateway_Of_India.jpg", // 🔹 Add your own image link here
  },
  {
    name: "Red Fort",
    location: "Delhi, India",
    image: "https://t3.ftcdn.net/jpg/01/08/02/28/360_F_108022820_QUowbWsLW7nD2CfgFxapM4QFvCkGWtWn.jpg", // 🔹 Add your own image link here
  },
];

const PopularSites: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="popular-section">
      <h2 className="section-title">Popular Heritage Sites</h2>
      <div className="card-container">
        {popularSites.map((site, index) => (
          <div className="site-card" key={index}>
            {site.image ? (
              <img src={site.image} alt={site.name} className="site-img" />
            ) : (
              <div className="site-placeholder">Add Image</div>
            )}
            <div className="site-content">
              <h3>{site.name}</h3>
              <p>{site.location}</p>
              <button
              className="view-btn"
              onClick={() => navigate(`/ai-details/${site.name}`)}
              >
              View Details
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSites;
