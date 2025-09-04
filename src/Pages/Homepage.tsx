// src/pages/Homepage.tsx
import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import Header from "./Header"; // ✅ Make sure path is correct
import "../Styles/Homepage.css";
import PopularSites from "../Components/PopularSites";

const Homepage: React.FC = () => {
 
  return (
    <>
      <Header /> {/* ✅ Your fixed header */}
      <PopularSites />
    </>
  );
};

export default Homepage;
