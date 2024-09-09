import React from "react";
import "./GadgetComponent.css";

const GadgetComponent = ({
  name,
  imgPath,
}: {
  name: string;
  imgPath: string;
}) => {
  return (
    <div className="gadget-component">
      <div>
        <img src={imgPath} className="gadget-image" />
      </div>
      <div>
        <span className="gadget-name">{name}</span>
      </div>
    </div>
  );
};

export default GadgetComponent;
