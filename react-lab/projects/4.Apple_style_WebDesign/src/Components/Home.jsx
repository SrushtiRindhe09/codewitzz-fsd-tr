import React from "react";
import Card from "./Card";
import cardData from "../Data/CardData";


function Home() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-20 pb-18">
      
      <div className="mb-8">
        <h1 className="title text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Think Different.
          </span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Build Better.
          </span>
        </h1>
      </div>
      <p className="ani1 text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
        Experience the perfect blend of innovation and elegance. Our
        revolutionary platform empowers creators to build extraordinary digital
        experiences with unparalleled precision and style.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
        <button
          className="group ani1 relative bg-black text-white px-10 py-4 rounded-2xl font-semibold flex items-center space-x-3 overflow-hidden transition-all duration-300"
          tabindex="0"
        >
          <div className="  absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100"></div>
          <span className=" relative z-10">Get Started</span>
          <div className=" relative z-10">
            <img src="./src/assets/wa.png" alt="" />
          </div>
        </button>
        <button
          className="ani1 group bg-white/80 backdrop-blur-xl text-gray-900 px-10 py-4 rounded-2xl font-semibold flex items-center space-x-3 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          tabindex="0"
        >
          <div>
            <img src="./src/assets/play.png" alt="" />
          </div>
          <span>Watch Demo</span>
        </button>
      </div>
      <div className="blur1 relative p-2 md:p-4">
        <div className=" relative rounded-2xl overflow-hidden">
          <img
            src="./src/assets/troffy.jpg"
            className="w-full h-96 md:h-[500px] object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent flex items-end justify-center pb-8"></div>
        </div>
      </div>

      <div className=" ani1 text-center mb-24">
        <div className="mb-8">
          <span className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 border border-blue-100/50 text-blue-700 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg cursor-pointer">
            <div>
              <img src="./src/assets/star.png" alt="" />
            </div>
            <span>Powerful Features</span>
          </span>
        </div>
        <h2 className=" ani1 text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Everything you need.
          </span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Nothing you don't.
          </span>
        </h2>
        <p className="ani1 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Discover a comprehensive suite of tools designed to streamline your
          creative process and bring your boldest ideas to life with
          unprecedented ease, precision, and style.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            dec={card.dec}
            img={card.img}
            clr={card.clr}
          />
        ))}
      </div>

      <div className=" ani1 text-center">
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl"></div>
          <button
            className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-12 py-5 rounded-2xl font-semibold shadow-2xl overflow-hidden transition-all duration-300"
            tabindex="0"
          >
            <div className=" ani1 absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100"></div>
            <span className="relative z-10 flex items-center space-x-3">
              <span className="text-lg">Explore All Features</span>
              <div className="flex items-center">
                <img src="./src/assets/wa.png" alt="" />
              </div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
          </button>
        </div>
        <p className="ani1 sectionmt-6 text-gray-500 text-sm">
          ✨ No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </div>
  );
}

export default Home;