import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Homep.jsx'
import NotFound from './NotFound';
import "./App.css";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
  </Router>
  )
}

export default App
