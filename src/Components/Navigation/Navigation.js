import React from "react";
// import sign from "../../Assets/sign.png";
import sign from "../../Assets/logo4.png";
import "./Navigation.css";

const navigation = props => {
  return (
    <nav className={props.navOpacity}>
      <a href="#intro">
        <img src={sign} alt="Smiley face" height="48" width="48" />
      </a>

      <a href="#" onClick={props.modalSwitch}>
        ORDER
      </a>

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

      <div className="hamburger">
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
    </nav>
  );
};

export default navigation;
