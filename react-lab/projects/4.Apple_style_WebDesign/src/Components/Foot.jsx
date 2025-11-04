import React from 'react';

const Foot = ({ title, name = [] }) => (
  <div>
    <h3 className="ani1 font-semibold mb-4">{title}</h3>
    <ul className="ani1 space-y-3">
      {name.map((label, index) => (
        <li key={index}>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Foot;