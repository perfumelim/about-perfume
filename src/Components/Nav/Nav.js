import React from "react";
import { withRouter } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="navBar">
      <img src="./향수로고_1.png" />
    </div>
  );
};

export default withRouter(Nav);
