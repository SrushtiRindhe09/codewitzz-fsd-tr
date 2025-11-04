import React from "react";
import Box from "./Box";
import boxData from "../Data/BoxData";
function Bottom() {
  return (
    <div>
      <div className="relativ e z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24" s>
          <div className="ani1 mb-8">
            <span className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full text-sm font-semibold shadow-2xl cursor-pointer">
              <div>
                <img src="./src/assets/true.png" alt="" />
              </div>
              <span>See It In Action</span>
            </span>
          </div>
          <h2 className="ani1 text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-white">Crafted for</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Perfection
            </span>
          </h2>
          <p className="ani1 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every pixel matters. Every interaction is thoughtfully designed.
            Experience the attention to detail that sets exceptional products
            apart from the ordinary.
          </p>
        </div>
        <div className="ani1 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="ani1 space-y-8">
              {boxData.map((box) => (
                <Box name={box.name} de={box.de} logo={box.logo} />
              ))}
            </div>
            <div className="pt-4">
              <button
                className="ani1 group relative bg-white text-black px-10 py-4 rounded-2xl font-bold shadow-2xl overflow-hidden transition-all duration-300"
                tabindex="0"
              >
                <div className="ani1 absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100"></div>
                <span className="relative z-10 flex items-center space-x-2 group-hover:text-white transition-colors duration-300">
                  <span>Learn More</span>
                  <div>
                    <img src="./src/assets/arrow.png" alt="" />
                  </div>
                </span>
              </button>
            </div>
          </div>
          <div className="ani1 relative">
            <div
              className="relative bg-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 group"
              >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
              <div className="ani1 relative p-2 md:p-6">
                <div className="relative rounded-2xl overflow-hidden">
                  <img src="./src/assets/tv.jpg" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-8">
                    <div className="bg-white/90 backdrop-blur-lg px-6 py-3 rounded-full shadow-2xl">
                      <span className="text-sm font-semibold text-gray-800">
                        Interactive Preview
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full backdrop-blur-sm border border-white/20 shadow-2xl"></div>
            <div className="absolute -inset-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom;