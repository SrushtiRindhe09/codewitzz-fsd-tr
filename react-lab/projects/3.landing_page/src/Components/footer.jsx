import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Brand */}
        <div className="footer-brand">
          <h2 className="brand-name">
            <span className="brand-icon"></span> Cupertino
          </h2>
          <p>
            Empowering creators worldwide with innovative tools and seamless experiences. 
            Join thousands of professionals who trust our platform.
          </p>
          <div className="social-icons">
            <span>🍷</span>
            <span>🐦</span>
            <span>💼</span>
            <span>✉️</span>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h3>Product</h3>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Documentation</li>
              <li>API Reference</li>
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press Kit</li>
            </ul>
          </div>

          <div>
            <h3>Support</h3>
            <ul>
              <li>Help Center</li>
              <li>Community</li>
              <li>Status</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>GDPR</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Cupertino. All rights reserved.</p>
        <p>
          Made with ❤️ in Silicon Valley
        </p>
      </div>
    </footer>
  );
}

export default Footer;
