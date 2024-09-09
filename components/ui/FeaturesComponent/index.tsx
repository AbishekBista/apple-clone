import React from "react";
import { ImInsertTemplate } from "react-icons/im";
import "./FeaturesComponent.css";

const FeaturesComponent = ({
  text,
  imgPath,
  subText,
  index,
}: {
  text: string;
  imgPath: string;
  subText: string[];
  index: number;
}) => {
  return (
    <div className="features-card">
      <img src={imgPath} className="features-img" />
      <h3
        className="features-text"
        style={{ color: index == 7 ? "black" : "white" }}
      >
        {text}
      </h3>
      <div className="features-subtext-list">
        {subText.map((item) => {
          console.log(index);
          console.log(index);
          return (
            <div
              className="features-subtext"
              style={{ color: index == 7 ? "black" : "white" }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <button className="features-show-more">+</button>
    </div>
  );
};

export default FeaturesComponent;
