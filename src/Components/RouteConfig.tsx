
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import AboutPage from "../Pages/AboutPage";
import LoginPage from "../Pages/LoginPage";
//import ProfilePage from "../Pages/ProfilePage";
import VisitedPlaces from "../Components/VisitedPlaces";
import AIDetailsPage from "../Pages/AIDetailsPage";
import Explorepage from "../Pages/Explorepage";


const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/visited-places" element={<VisitedPlaces />} />
        <Route path="/ai-details/:siteName" element={<AIDetailsPage />} />
        <Route path="/explore" element={<Explorepage />} />
        
      </Routes>
    </BrowserRouter>
  );
};


export default RouteConfig;
