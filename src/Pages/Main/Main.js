import React from "react";
import { withRouter } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  return (
    <div className="showcase">
      <h1>All about me</h1>
      <img src="./stamp.JPG"></img>
    </div>
  );
};

export default withRouter(Main);
