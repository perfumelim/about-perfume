import React from "react";
import stamp from "./stamp.JPG";
import { GrGithub, GrLanguage, GrMail } from "react-icons/gr";
import { withRouter } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  return (
    <div className="showcase">
      <img alt="main_image" src={stamp} width="100%" />
      <div className="introduce">
        <span>Hello,</span>
        <p>I'm Perfume!</p>
        <div className="iconZone">
          <GrGithub />
          <GrLanguage />
          <GrMail />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Main);
