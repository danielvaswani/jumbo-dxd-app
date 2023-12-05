// Your component file (RewardProduct.js)

import React from "react";
import "./RewardProduct.css";

const RewardProduct = (props) => {
  return (
    <div className="reward-product">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default RewardProduct;
