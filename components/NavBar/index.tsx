import React from "react";
import { FaApple, FaSearch } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav>
      <div className="navBar">
        <FaApple className="navBarLinks" />
        <p className="navBarLinks">Store</p>
        <p className="navBarLinks">Mac</p>
        <p className="navBarLinks">iPad</p>
        <p className="navBarLinks">iPhone</p>
        <p className="navBarLinks">Watch</p>
        <p className="navBarLinks">AirPods</p>
        <p className="navBarLinks">TV & Home</p>
        <p className="navBarLinks">Entertainment</p>
        <p className="navBarLinks">Accessories</p>
        <p className="navBarLinks">Support</p>
        <FaSearch className="navBarLinks" />
        <FaShop className="navBarLinks" />
      </div>
    </nav>
  );
};

export default NavBar;
