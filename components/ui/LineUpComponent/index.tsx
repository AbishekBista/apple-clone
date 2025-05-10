import React from "react";
import "./LineUpComponent.css";
import { FaChevronRight } from "react-icons/fa";

const LineUpComponent = ({
  phoneImg,
  colors,
  name,
  tag,
  emi,
  lumpSum,
  chipImg,
  chipText,
  cameraImg,
  cameraText,
  batteryImg,
  batteryText,
}: {
  phoneImg: string;
  colors: string[];
  name: string;
  tag: string;
  emi: string;
  lumpSum: string;
  chipImg: string;
  chipText: string;
  cameraImg: string;
  cameraText: string[];
  batteryImg: string;
  batteryText: string;
}) => {
  return (
    <div className="phone-card">
      <div className="upper-card">
        <div className="phone-image">
          <img src={phoneImg} />
        </div>
        <div className="color-palette">
          {colors.map((color) => (
            <div className="color" style={{ backgroundColor: color }} key={color}/>
          ))}
        </div>
        <h2 className="phone-name">{name}</h2>
        <p className="tag-line">{tag}</p>
        <div className="price-range-container">
          <p className="price">
            {emi}
            <sup className="emi-link">‡</sup>
          </p>
          <p className="price">
            {lumpSum}
            <sup className="emi-link">*</sup>
          </p>
        </div>
        <div className="buy-row">
          <div>
            <button className="learn-more-button">Learn More</button>
          </div>
          <div>
            <a>
              <p className="buy-link">
                Buy
                <FaChevronRight />
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="divider" />
      <div className="lower-card">
        <div className="details">
          <img src={chipImg} className="details-img" />
          <span className="details-text">{chipText}</span>
        </div>

        <div className="details">
          <img src={cameraImg} className="details-img" />
          {cameraText.map((item) => (
            <span className="details-text" key={item}>{item}</span>
          ))}
        </div>

        <div className="details">
          <img src={batteryImg} className="details-img" />
          <span className="details-text">{batteryText}</span>
        </div>
      </div>
    </div>
  );
};

export default LineUpComponent;
