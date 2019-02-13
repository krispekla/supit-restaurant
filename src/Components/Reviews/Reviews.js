import React from "react";
import "./Reviews.css";
import fulanovic from "../../Assets/fulek.jpg";
import djambic from "../../Assets/djambic.jpg";
import kucak from "../../Assets/kucak.jpg";
const reviews = () => {
  return (
    <div className="customer-review">
      <h2>READ THE EXPERIENCES OF OUR CUSTOMERS</h2>
      <hr />
      <div className="customer-item-wrapper">
        <div className="customer-item">
          <p>&#8220;</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa quasi
            voluptas labore consectetur aduousucubg ekut Assumenda et dista!
          </p>
          <div className="customer-item-wrapper-inside">
            <img src={fulanovic} alt="" />
            <p>Bojan Fulanovic</p>
          </div>
        </div>
        <div className="customer-item">
          <p>&#8220;</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa quasi
            voluptas labore consectetur aduousucubg ekut Assumenda et dista!
          </p>
          <div className="customer-item-wrapper-inside">
            <img src={djambic} alt="" />
            <p>Goran Djambic</p>
          </div>
        </div>
        <div className="customer-item">
          <p>&#8220;</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa quasi
            voluptas labore consectetur aduousucubg ekut Assumenda et dista!
          </p>
          <div className="customer-item-wrapper-inside">
            <img src={kucak} alt="" />
            <p>Danijel Kucak</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reviews;
