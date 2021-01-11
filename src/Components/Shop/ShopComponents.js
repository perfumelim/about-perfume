import React from "react";
import { withRouter } from "react-router-dom";
import "./ShopComponents.scss";

const ShopComponents = ({ id, title, img, content }) => {
  return (
    <div className="shopPages">
      <img src={img} />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default withRouter(ShopComponents);
