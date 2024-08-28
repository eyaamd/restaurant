import React from "react";
import "./Seller.css";
import SellerData from "../../Data/SellerData";
import SellerCard from "../Card/SellerCard";
const Seller = () => {
  const sel_card = SellerData.map((i) => {
    return (
      <SellerCard key={i.id} image={i.image} title={i.title} price={i.price} />
    );
  });
  return (
    <>
      <section class="seller">
        <div class="center-text">
          <h6>Food Items Popular Dishes </h6>
          <h2>Best Seller</h2>
        </div>

        <div class="seller-content">
            {sel_card}
        </div>
      </section>
    </>
  );
};

export default Seller;
