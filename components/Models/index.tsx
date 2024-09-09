import React from "react";
import "./Models.css";

const Models = () => {
  return (
    <div className="models-section">
      <h2 className="models-text">Take a closer look at our latest models.</h2>
      <div className="models-image-container">
        <img src="./guided_tour.jpg" className="models-image" />
        <div className="overlay-over-image">
          <div className="div-overlay-text">
            <h3 className="overlay-text">A Guided Tour of</h3>
            <h3 className="overlay-text">iPhone 15 & iPhone 15 Pro</h3>
          </div>
          <center>
            <button className="overlay-button">Watch the film</button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Models;
