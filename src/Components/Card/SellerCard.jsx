import React from "react";
import './SellerCard.css'
const SellerCard = (props) => {
  return (
    <>
      <div className="row">
        <div className="row-img">
          <img src={props.image} alt="" />
        </div>
        <h5>{props.title}</h5>
        <h6>{props.price}</h6>
        <div className="s-btn">
          <a href="#">Add to cart </a>
        </div>
      </div>
    </>
  );
};

export default SellerCard;
