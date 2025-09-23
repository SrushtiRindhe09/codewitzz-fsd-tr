import React from "react";
import searchIcon from "./assets/search-icon.jpg";
import contactIcon from "./assets/contact-icon.png";


function Navbar() {


return (
    <nav className="navbar">
        <div className="logo">Cupertino</div>
        <ul className="nav-links">
            <li>Products</li>
            <li>Solutions</li>
            <li>Services</li>
            <li>Support</li>
        </ul>
        <div className="icons">
            <span>
                <img class="search-icon"
                    src={searchIcon}
                   
                />
            </span>
             <span>
                <img class="contact-icon"
                    src={contactIcon}
                    
                />
                </span>
        </div>
    </nav>
);
}

export default Navbar;
