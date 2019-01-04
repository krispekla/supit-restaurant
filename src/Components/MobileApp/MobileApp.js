import React from "react";
import "./MobileApp.css";
import playstore from "../../Assets/playstore.png";
import appstore from "../../Assets/appstore.svg";
import iphone from "../../Assets/iphone.png";

const mobileApp = () => {
  return (
    <div id="mobileApp-container">
      <h2>MOBILE APP - CARRIE YOUR FOOD IN YOUR POCKET</h2>
      <hr />
      <div className="mobileApp-wrapper">
        <div className="iphone-mockup">
          <img src={iphone} alt="iphone" />
        </div>

        <div className="mobileApp-btn-wrapper">
          <div className="mobileApp-btn-item">
            <p>
              <span className="mobileApp-blueBox">1</span>Download the app
            </p>
          </div>

          <div className="mobileApp-btn-item">
            <p>
              <span className="mobileApp-blueBox">2</span>Create account
            </p>
          </div>

          <div className="mobileApp-btn-item">
            <p>
              <span className="mobileApp-blueBox">3</span>Place order
            </p>
          </div>

          <div className="store-links">
            <a href="https://www.apple.com/lae/ios/app-store/">
              <img id="appStore" src={appstore} alt="Appstore" />
            </a>
            <a href="https://play.google.com/">
              <img id="playStore" src={playstore} alt="Playstore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mobileApp;
