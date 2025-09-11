import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import AboutPage from "../Pages/AboutPage"
import LoginPage from "../Pages/LoginPage"
import VisitedPlaces from "../Pages/VisitedPlaces"
import ExplorePage from "../Pages/Explorepage"

const RouteConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/visited-places" element={<VisitedPlaces />} />
        <Route path="/explore/:location" element={<ExplorePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteConfig
