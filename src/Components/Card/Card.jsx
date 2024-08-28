import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <>

      <div className="col">
        <div className="col-img">
          <img src={props.image} alt="" />
        </div>

        <div className="col-text">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
