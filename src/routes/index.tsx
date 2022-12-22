import React from "react";
import Home from "../pages/Home";
import BuildingPage from "../pages/BuildingPage";
import { Routes, Route } from "react-router-dom";

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/building-page" element={<BuildingPage />} />
      <Route path="/404" element={<BuildingPage />} />
    </Routes>
  );
};

export default RoutesComponent;
