import React from "react";
import Foot from "./Foot";
import footerData from "../Data/FooterData";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white">
        <div className=" max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
            <div className=" ani1 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                <span className="font-semibold text-xl">Cupertino</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering creators worldwide with innovative tools and seamless
                experiences. Join thousands of professionals who trust our
                platform.
              </p>
              <div className="ani1 flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label="GitHub"
                  tabindex="0"
                >
                  <img src="./src/assets/in.png" alt="" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label="Twitter"
                  tabindex="0"
                >
                  <img src="./src/assets/twit.png" alt="" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label="LinkedIn"
                  tabindex="0"
                >
                  <img src="./src/assets/git.png" alt="" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label="Email"
                  tabindex="0"
                >
                  <img src="./src/assets/mails.png" alt="" />
                </a>
              </div>
            </div>
            {footerData.map((footerData, index) => (
              <Foot
                key={index}
                title={footerData.title}
                name={footerData.name}
              />
            ))}
          </div>
          <div className="ani1 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Cupertino. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="hover:text-white cursor-pointer transition-colors duration-200">
                Made with ❤️ in Silicon Valley
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;