import React from "react";
import GadgetComponent from "@/components/ui/GadgetComponent";
import { gadgetList } from "@/data/gadget_list";
import "./Gadgets.css";

const Gadgets = () => {
  return (
    <div className="gadget-list">
      {gadgetList.map((gadget) => (
        <GadgetComponent
          name={gadget.name}
          key={gadget.imgPath}
          imgPath={gadget.imgPath}
        />
      ))}
    </div>
  );
};

export default Gadgets;
