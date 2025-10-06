// src/Components/RouteConfig.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "../Pages/Homepage";
import LoginPage from "../Pages/LoginPage";
import ExplorePage from "../Pages/Explorepage";
import AIDetailsPage from "../Pages/AIDetailsPage";
import AboutPage from "../Pages/AboutPage";

// Optional: VisitedPlaces page if you have one
import VisitedPlacesPage from "../Components/VisitedPlaces";

const RouteConfig: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/ai-details/:siteName/:location" element={<AIDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        {VisitedPlacesPage && (
          <Route path="/visited-places" element={<VisitedPlacesPage />} />
        )}
      </Routes>
    </Router>
  );
};

export default RouteConfig;
