import React from "react";

function FeaturesSection() {
  return (
    <div className="features-container">
      {/* Left Side - Features */}
      <div className="features-left">
        <div className="feature-item">
          <div className="icon icon-blue">⚡</div>
          <div>
            <h2>Seamless Integration</h2>
            <p>
              Connect with your favorite tools and workflows without missing a beat.
              One-click setup for popular platforms.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div className="icon icon-pink">🛡️</div>
          <div>
            <h2>Smart Automation</h2>
            <p>
              Let AI handle the routine tasks while you focus on what matters most.
              Intelligent workflows that adapt to your needs.
            </p>
          </div>
        </div>

        <div className="feature-item">
          <div className="icon icon-green">🌐</div>
          <div>
            <h2>Real-time Sync</h2>
            <p>
              Your work is instantly synchronized across all devices and platforms.
              Never lose progress, work from anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="features-right">
        <div className="image-frame">
          <img src="your-image.jpg" alt="Dashboard" />
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
