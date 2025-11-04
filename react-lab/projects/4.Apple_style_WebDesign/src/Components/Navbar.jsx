import React from "react";
import logo from "../assets/react.svg";

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 border-b border-black/5 bg-white/80 backdrop-blur-md opacity-100 transform-none
">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className=" ani1 flex items-center space-x-3 cursor-pointer">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl shadow-lg"></div>
              <div className="absolute inset-0.5 bg-white rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
              </div>
            </div>
            <span className="font-semibold text-xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Cupertino
            </span>
          </div>
          <div className="ani1 hidden md:flex items-center space-x-7 ">
            <a href="" >
              {" "}
              <span className=" text-gray-500   font-semibold   "  >Products</span>
            </a>
            <a href="">
              {" "}
              <span className=" text-gray-500   font-semibold">Solutions</span>
            </a>
            <a href="">
              {" "}
              <span className=" text-gray-500   font-semibold">Services</span>
            </a>
            <a href="">
              {" "}
              <span className=" text-gray-500   font-semibold">Support</span>
            </a>
          </div>
          <div className="ani1 flex items-center space-x-2">
            <button className="p-3 rounded-xl hover:bg-gray-100 transition-all duration-200 group">
              <img src="./src/assets/search.png" alt="" />
            </button>
            <button className=" p-3 rounded-xl hover:bg-gray-100 transition-all duration-200">
              <div className="md:transform-none">
                <img src="./src/assets/per.png" alt="" />
              </div>
            </button>
            <button
              className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-all duration-200"
              tabindex="0"
            >
              <div>
                <img src="./src/assets/lines.png" alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;