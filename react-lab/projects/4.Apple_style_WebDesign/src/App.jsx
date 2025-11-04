import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Bottom from "./Components/Bottom";
import Footer from "./Components/Footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
import ScrollSmoother from "gsap/ScrollSmoother";

function App() {
  useGSAP(() => {
    gsap.to(".box", {
      x: 1000,
      duration: 2,
      delay: 1,
    });

    gsap.from(".title", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });

    gsap.from(".image", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.6,
    });

    gsap.utils.toArray(".ani1").forEach((sec) => {
      gsap.from(sec, {
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });
    });

    gsap.set(".blur1", { filter: "blur(10px)" });
    gsap.to(".blur1", {
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: ".blur1",
        start: "top center",
        end: "top top",
      },
    });

    ScrollSmoother.create({
      wrapper: ".smooth-wrapper",
      content: ".smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    gsap.to(".myImage", {
      duration: 1.5,
      x: "-100vw",
      ease: "power2.out"
    });
  });

  return (
    <div className="smooth-wrapper">
      <Navbar />
      <div className="smooth-content">
        <Home />
        <section className="relative py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
          <Bottom />
        </section>
        <Footer />
      </div>
    </div>
  );
}
export default App;
