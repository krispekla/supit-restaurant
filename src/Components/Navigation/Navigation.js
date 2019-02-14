import React from "react";
import sign from "../../Assets/logo4.png";
import "./Navigation.css";
import { Link, animateScroll as scroll } from "react-scroll";

const navigation = props => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <nav className={props.navOpacity}>
      <a href="#intro" onClick={scrollToTop}>
        <img src={sign} alt="Smiley face" height="48" width="48" />
      </a>

      <a href={props.modalSwitch} onClick={props.modalSwitch}>
        ORDER
      </a>

      <ul>
        <li>
          <Link
            to="delivery-container"
            smooth={true}
            duration={1500}
            offset={70}
          >
            Delivery
          </Link>
        </li>
        <li>
          <Link to="mobileApp-container" smooth={true} duration={1500}>
            Mobile App
          </Link>
        </li>
        <li>
          <Link to="ourCities-container" smooth={true} duration={1500}>
            Our Cities
          </Link>
        </li>
        <li>
          <Link to="subscribe-container" smooth={true} duration={1500}>
            Subscriptions
          </Link>
        </li>
        <li>
          <Link to="contact-container" smooth={true} duration={1500}>
            Contact us
          </Link>
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
