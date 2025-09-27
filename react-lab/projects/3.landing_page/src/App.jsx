import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Buttons from "./Components/Buttons";
import Features from "./Components/features";
import FeatureCard from "./Components/featureCard";
import ExploreFeatures from "./Components/Explorefeaturebtn";
import HeroSection from "./Components/Action";

import './style.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features/>
       <FeatureCard />
       <ExploreFeatures/>
         <HeroSection />
         
    </div>
  );
}

export default App;


