import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Buttons from "./Components/Buttons";
import Features from "./Components/features";
import './style.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features/>
    </div>
  );
}

export default App;


