import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <section className="footer_container">
      <div className="footer-box">
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>
      </div>

      <div className="footer-box">
        <h3>Contact</h3>
        <li>
          <a href="">Work Time</a>
        </li>
        <li>
          <a href="">Monday - Friday</a>
        </li>
        <li>
          <a href="">11:00 - 00:00</a>
        </li>
      </div>

      <div className="footer-box">
        <h3>Useful Links</h3>
        <li>
          {" "}
          <a href="">Support</a>
        </li>
        <li>
          <a href="">Terms of use</a>
        </li>
        <li>
          <a href="">Site map</a>
        </li>
      </div>

      <div className="footer-box">
        <h3>Our Services</h3>
        <li>
          {" "}
          <a href="">Contact Us</a>
        </li>
        <li>
          <a href="">Track Your Order</a>
        </li>
      </div>
    </section>
  );
};

export default Footer;
