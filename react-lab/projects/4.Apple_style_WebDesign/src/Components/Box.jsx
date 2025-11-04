import React from "react";

function Box({ name, de, logo }) {
  return (
    <div>
      <div className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/10">
        <img src={logo} alt="icon" className="w-12 h-12 bg-amber-50" />

        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {de}
          </p>
        </div>
        <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
          <img src="./src/assets/arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Box;