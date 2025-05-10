"use client";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LineUpComponent from "@/components/ui/LineUpComponent";
import "./LineUp.css";
import { lineUpList } from "@/data/lineup_list";

const LineUp = () => {
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
    <div className="lineup-section">
      <div className="lineup-texts-section">
        <h1 className="lineup-left-text">Explore the line-up</h1>
        <a>
          <p className="lineup-link">
            Compare all models <FaChevronRight />
          </p>
        </a>
      </div>
      <div className="lineup-carousel">
        <div className="lineup-list" ref={scrollRef}>
          {lineUpList.map((item) => (
            <LineUpComponent
              key={item}
              phoneImg={item.phoneImg}
              colors={item.colors}
              name={item.name}
              tag={item.tag}
              emi={item.emi}
              lumpSum={item.lumpSum}
              chipImg={item.chipImg}
              chipText={item.chipText}
              cameraImg={item.cameraImg}
              cameraText={item.cameraText}
              batteryImg={item.batteryImg}
              batteryText={item.batteryText}
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
              backgroundColor: scrollIndex == 2 ? "#ececee" : "#e2e2e5",
              color: scrollIndex == 2 ? "#B7B7B9" : "black",
            }}
            className="carousel-controller-buttons"
            onClick={scrollIndex == 2 ? () => {} : () => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default LineUp;
