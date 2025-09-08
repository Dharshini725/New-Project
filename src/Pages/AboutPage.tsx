import React from "react";
import "../Styles/AboutPage.css";

const AboutPage: React.FC = () => {
  return (
    <div className="about-page-container">
      <div className="about-page-content">
        <h1>About HeritageXplore</h1>
        <p className="about-intro">
          HeritageXplore is dedicated to showcasing India’s glorious cultural
          legacy. Our platform highlights iconic monuments, heritage sites,
          and timeless stories that connect the past with the present.
        </p>

        {/* Mission & Vision */}
        <div className="about-details">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              To inspire curiosity and appreciation for India’s heritage by
              making historical knowledge more accessible and engaging for
              everyone.
            </p>
          </div>

          <div className="about-text">
            <h2>Our Vision</h2>
            <p>
              To build a platform where history comes alive digitally,
              preserving culture for future generations while encouraging
              exploration and learning.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="about-features">
          <h2>What We Offer</h2>
          
            <p>Detailed insights about monuments and historical sites.</p>
            <p>Curated images, videos, and stories about India’s culture.</p>
            <p>Interactive features to explore heritage digitally.</p>
            <p>A simple and engaging design for easy discovery.</p>
        
        </div>

       
      </div>
    </div>
  );
};

export default AboutPage;
