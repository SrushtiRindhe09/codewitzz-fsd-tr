import React from "react";
const FeatureCard = () => {
  const features = [
    {
      icon: "✨",
      title: "Intelligent Design",
      description:
        "AI-powered design suggestions that adapt to your creative vision and enhance workflow.",
      lineColor: "#ff6a00",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Experience blazing-fast performance with our optimized rendering engine.",
      lineColor: "#00bfff",
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption and secure cloud storage.",
      lineColor: "#00c853",
    },
    {
      icon: "🎨",
      title: "Design Systems",
      description:
        "Comprehensive design system with pre-built components, consistent styling, customizable themes, and seamless brand integration.",
      lineColor: "#ff4081",
    },
    {
      icon: "☁️",
      title: "Developer Friendly",
      description:
        "Export clean, production-ready code with modern frameworks, TypeScript support, and best practices built right in.",
      lineColor: "#1e1b21ff",
    },
    {
      icon: "🤝",
      title: "Global Collaboration",
      description:
        "Real-time collaboration tools that bring teams together from anywhere in the world with seamless sync and version control.",
      lineColor: "#6200ea",
    },
  ];

  return (
    <div className="feature-grid">
      {features.map((f, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">{f.icon}</div>
          <h3 className="feature-title">{f.title}</h3>
          <p className="feature-desc">{f.description}</p>
          <div
            className="feature-line"
            style={{ backgroundColor: f.lineColor }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
