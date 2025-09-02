//import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Header from '../Pages/Header';

const RouteConfig = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes >
        <Route path='/' element={<Header />} />

      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default RouteConfig
