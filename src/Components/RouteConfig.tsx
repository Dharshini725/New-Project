//import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/Homepage';

const RouteConfig = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes >
        <Route path='/' element={<Homepage />} />

      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default RouteConfig
