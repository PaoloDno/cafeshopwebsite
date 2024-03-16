import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Homep.jsx'
import Order from './components/Order.jsx';
import NotFound from './NotFound';
import "./App.css";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/cafeshopwebsite/" element={<Home />} /> 
        <Route exact path="/cafeshopwebsite/order" element={<Order />} /> 
      </Routes>
  </Router>
  )
}

export default App
