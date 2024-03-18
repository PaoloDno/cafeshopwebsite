import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Homep.jsx'
import Order from './components/Order.jsx';
import NotFound from './NotFound';
import "./App.css";
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/order" element={<Order />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
