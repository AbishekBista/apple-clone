"use client";
import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [scale, setScale] = useState(1);
  const [borderRadius, setBorderRadius] = useState("0px");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shrinkThreshold = 300; // The scroll amount at which the video starts to shrink
      if (scrollY > shrinkThreshold) {
        const newScale = Math.max(0.7, 1 - (scrollY - shrinkThreshold) / 1000);
        setScale(newScale);
        setBorderRadius("20px");
      } else {
        setScale(1);
        setBorderRadius("0px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="hero-section">
      <div className="hero-texts">
        <h1 className="hero-left-text">iPhone</h1>
        <h3 className="hero-right-text">Designed to be loved.</h3>
      </div>
      <div className="video-container">
        <video
          style={{ transform: `scale(${scale})`, borderRadius: borderRadius }}
          className="video-section"
          autoPlay={true}
          loop={true}
          muted
        >
          <source src="./xlarge_2x.mp4" type="video/mp4" />
          Your video does not support the video tag
        </video>
      </div>
    </div>
  );
};

export default Hero;
