// src/pages/Homepage.tsx
import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import Header from "../Pages/Header"; // ✅ Make sure path is correct
import "../Styles/Homepage.css";

const Homepage: React.FC = () => {
 
  return (
    <>
      <Header /> {/* ✅ Your fixed header */}
    
    </>
  );
};

export default Homepage;
