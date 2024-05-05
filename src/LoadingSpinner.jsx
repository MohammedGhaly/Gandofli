import React from "react";
import "./spinner.css";

const LoadingSpinner = ({ size = 70, color = "#f9e5ff", thickness = 10 }) => {
  const spinnerStyle = {
    display: "inline-block",
    width: size,
    height: size,
    border: `${thickness}px solid ${color}`,
    borderTop: `${thickness}px solid transparent`,
    borderRadius: "50%",
    // animation: "spin 10s linear infinite",
  };

  return <div className="spinner" style={spinnerStyle} />;
};

export default LoadingSpinner;
