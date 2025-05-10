"use client";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import StoreDescriptionComponent from "@/components/ui/StoreDescriptionComponent";
import "./StoreDescription.css";
import { storeDescriptionList } from "@/data/storedesc_list";

const StoreDescription = () => {
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
    <div className="storedesc-section">
      <div className="storedesc-texts-section">
        <h1 className="storedesc-left-text">Explore the line-up</h1>
        <a>
          <p className="storedesc-link">
            Compare all models <FaChevronRight />
          </p>
        </a>
      </div>
      <div className="storedesc-carousel">
        <div className="storedesc-list" ref={scrollRef}>
          {storeDescriptionList.map((item) => (
            <StoreDescriptionComponent key={item}/>
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

export default StoreDescription;
