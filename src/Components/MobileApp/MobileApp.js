import React from "react";
import playstore from "../../Assets/playstore.png";
import appstore from "../../Assets/appstore.svg";
import iphone from "../../Assets/iphone.png";

const mobileApp = () => {
  return (
    <div className="mobileApp-Wrapper">
      <h2>MOBILE APP - CARRIE YOUR FOOD IN YOUR POCKET</h2>
      <hr />
      <div className="iphone-mockup">
        <img src={iphone} alt="iphone" />
      </div>
      <div className="mobileApp-btn-item">
        <button className="btn btn-primary  btn-lg" type="button" onClick="">
          1
        </button>
        <p>Download the app</p>
      </div>
      <div className="mobileApp-btn-item">
        <button className="btn btn-primary  btn-lg" type="button" onClick="">
          2
        </button>
        <p>Create account</p>
      </div>
      <div className="mobileApp-btn-item">
        <button className="btn btn-primary  btn-lg" type="button" onClick="">
          3
        </button>
        <p>Place order</p>
      </div>
      <div className="store-links">
        <img src={appstore} alt="Appstore" />
        <img src={playstore} alt="Playstore" />
      </div>
    </div>
  );
};

export default mobileApp;
