import React from 'react';

function Card({title, dec, img ,clr}) {
  return (
    <div className=" ani1 group relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 overflow-hidden cursor-pointer">
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 bg-gradient-to-br ${clr}`}></div>
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${clr} rounded-full opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 blur-sm`}></div>

      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center w-18 h-18 bg-gradient-to-br ${clr} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
          <img src={img} alt="icon" className="bg-amber-50" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
          {dec}
        </p>
        <div className="relative mt-8 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${clr} rounded-full`}></div>
        </div>
        <div className="absolute bottom-6 right-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
          <span className="text-lg">→</span>
        </div>
      </div>
      <div className="absolute inset-0 rounded-3xl pointer-events-none"></div>
    </div>
  );
}

export default Card;
