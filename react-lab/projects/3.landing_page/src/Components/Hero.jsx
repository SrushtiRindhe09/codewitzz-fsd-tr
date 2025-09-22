import React from "react";
import Buttons from "./Buttons";


function Hero() {
  return (
    <section className="hero">
      <h1>
        Think Different. <br />
        <span className="highlight">Build Better.</span>
      </h1>
      <p>
        Experience the perfect blend of innovation and elegance. Our
        revolutionary platform empowers creators to build extraordinary
        digital experiences with unparalleled precision and style.
      </p>
      <Buttons />
    </section>
  );
}

export default Hero;
