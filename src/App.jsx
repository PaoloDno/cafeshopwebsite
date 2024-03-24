import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import Home from './components/Homep.jsx'
import Order from './components/Order.jsx';
import NotFound from './NotFound';
import "./App.css";
function App() {
  
  return (
    <Routes>
      <Route path="/cafeshopwebsite/" element={<Homepage />} /> 
      <Route path="/cafeshopwebsite/order" element={<Order />} />
      <Route path="/cafeshopwebsite/hero" element={<Homepage/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
