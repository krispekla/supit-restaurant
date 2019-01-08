import React from "react";
import sign from "../../Assets/sign.png";
import "./Navigation.css";

const navigation = props => {
  return (
    <nav class="navbar">
      <a href="#">
        <img src={sign} alt="Smiley face" height="48" width="48" />
      </a>

      <a onClick={props.modalSwitch}>ORDER</a>

      <ul>
        <li>
          <a href="#delivery-container">Delivery</a>
        </li>
        <li>
          <a href="#mobileApp-container">Mobile App</a>
        </li>
        <li>
          <a href="#ourCities-container">Our Cities</a>
        </li>
        <li>
          <a href="#subscribe-container">Subscriptions</a>
        </li>
        <li>
          <a href="#contact-container">Contact us</a>
        </li>
      </ul>
    </nav>
  );
};

export default navigation;
