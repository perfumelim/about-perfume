import React from "react";
import { withRouter } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  return (
    <div className="showcase">
      <h1>DEVSISTERS</h1>
      <p>CREATING THE BEST PLAYER EXPERIENCES</p>
    </div>
  );
};

export default withRouter(Main);
