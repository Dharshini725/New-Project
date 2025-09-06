import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import AboutPage from "../Pages/AboutPage";

const RouteConfig = () => {
  return (
   
      <BrowserRouter>
       <Routes >
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </BrowserRouter>
     
   
  )
}

export default RouteConfig
