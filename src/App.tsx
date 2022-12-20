import BuildingPage from 'componnets/BuildingPage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componnets/header';
import Home from './componnets/pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/building-page" element={<BuildingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
