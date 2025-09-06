// src/Pages/AboutPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AboutPage.css";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travelingFrom: "",
    travelingTo: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    navigate("/");
  };

  return (
    <div className="about-page-container">
      <div className="about-page-content">
        <h1>About HeritageXplore</h1>
        <p className="about-intro">
          We are dedicated to helping travelers discover the rich cultural heritage of India. 
          Our platform provides detailed information about historical sites, monuments, and 
          cultural experiences across the country.
        </p>

        <div className="about-details">
          <div className="about-text">
            <h2>Get in Touch</h2>
            <p>
              Have questions about your heritage journey? Want to share your experiences?
              Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>

          <form className="about-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="travelingFrom">Traveling From</label>
              <input
                type="text"
                id="travelingFrom"
                name="travelingFrom"
                value={formData.travelingFrom}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="travelingTo">Traveling To</label>
              <input
                type="text"
                id="travelingTo"
                name="travelingTo"
                value={formData.travelingTo}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;