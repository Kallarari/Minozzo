import Footer from "componnets/footer";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "routes";
import "./App.css";
import Header from "./componnets/header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RoutesComponent />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
