import React from "react";
import { withRouter } from "react-router-dom";
import logo from "./logo2.png";
import { FaShoppingCart } from "react-icons/fa";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="navBar">
      <div className="header">
        <img alt="Logo" src={logo} height="100px" />
        <div className="menu">
          <p>PROJECT</p>
          <p>FAVORITE</p>
          <p>COMPANION</p>
          <p>GALLERY</p>
        </div>
        <FaShoppingCart className="cartIcon" />
      </div>
    </div>
  );
};

export default withRouter(Nav);
