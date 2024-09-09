"use client";
import React, { useState, useRef } from "react";
import FeaturesComponent from "@/components/ui/FeaturesComponent";
import { featuresList } from "@/data/feature_list";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./Features.css";

const Features = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (current) {
      const scrollAmount = 300;
      const newScrollPosition =
        direction === "left"
          ? current.scrollLeft - scrollAmount
          : current.scrollLeft + scrollAmount;

      setScrollIndex((prevScrollIndex) =>
        direction === "left" ? prevScrollIndex - 1 : prevScrollIndex + 1
      );

      current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="features-section">
      <h1 className="features-left-text">Get to know iPhone</h1>
      <div className="features-carousel">
        <div className="features-list" ref={scrollRef}>
          {featuresList.map((item, i) => (
            <FeaturesComponent
              key={i}
              text={item.text}
              imgPath={item.imgPath}
              subText={item.subText}
              index={i}
            />
          ))}
        </div>
      </div>
      <div className="carousel-controller">
        <div className="carousel-controller-button-group">
          <FaChevronLeft
            style={{
              backgroundColor: scrollIndex == 0 ? "#ececee" : "#e2e2e5",
              color: scrollIndex == 0 ? "#B7B7B9" : "black",
            }}
            className="carousel-controller-buttons"
            onClick={scrollIndex == 0 ? () => {} : () => scroll("left")}
          />

          <FaChevronRight
            style={{
              backgroundColor: scrollIndex == 6 ? "#ececee" : "#e2e2e5",
              color: scrollIndex == 6 ? "#B7B7B9" : "black",
            }}
            className="carousel-controller-buttons"
            onClick={scrollIndex == 6 ? () => {} : () => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
