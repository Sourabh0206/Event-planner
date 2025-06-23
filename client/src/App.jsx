import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";


const App = () => {
  return (
    <>
      <BrowserRouter>

      <header>
        <Navbar/>
       <Hero/>

      </header>

      </BrowserRouter>
    </>
  );
};

export default App;