import React from "react";
import "./Footer.css";
import instagram from "../../Assets/instagram-footer.svg";
import facebook from "../../Assets/facebook-footer.svg";
import twitter from "../../Assets/twitter-footer.svg";
const footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <a href="#aboutus">About us</a>
        <a href="#iOS">iOS app</a>
        <a href="#Android">Android app</a>
      </div>

      <div className="footer-sign">
        <p>SUPIT - Algebra&copy;</p>
      </div>

      <div className="footer-social">
        <img src={facebook} alt="facebook icon" />
        <img src={twitter} alt="twitter icon" />
        <img src={instagram} alt="instagram icon" />
      </div>
    </div>
  );
};

export default footer;
