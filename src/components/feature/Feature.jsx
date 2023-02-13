import React from "react";
import "./feature.css";

function Feature(props) {
  return (
    <div className="features-container-feature">
      <div className="features-container-feature-title">
        <div />
        <h1>{props.title}</h1>
      </div>
      <div className="features-container-feature-text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Feature;
