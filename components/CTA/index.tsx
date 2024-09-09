import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta-section">
      <p className="cta-text">
        Get up to 24 months No Cost EMI on all iPhone models from most leading
        banks.‡
      </p>
      <div className="cta-link">
        <a href="#">
          <p>Show Now</p>
        </a>
      </div>
      <div>
        <FaChevronRight className="cta-link" />
      </div>
    </div>
  );
};

export default CTA;
