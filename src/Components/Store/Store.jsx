import React from "react";
import "./Store.css";
import StoreData from "../../Data/StoreData";
import Card from "../Card/Card";
const Store = () => {
  const cards = StoreData.map((item) => {
    return (
      <Card
        key={item.id}
        image={item.image}
        title={item.title}
        description={item.description}
      />
    );
  });
  return (
    <>
      <section className="store">
        <div className="center-text">
          <h6>Crispy,Every Bite Taste</h6>
          <h2>Visit Our Store</h2>
        </div>
        <div className="content">
        {cards} </div>
      </section>
    </>
  );
};

export default Store;
