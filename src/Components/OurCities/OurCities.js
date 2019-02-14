import React from "react";
import "./OurCities.css";

import newYork from "../../Assets/new-york.jpg";
import london from "../../Assets/london.jpg";
import paris from "../../Assets/paris.jpg";
import tokyio from "../../Assets/tokyio.jpg";

import twitter from "../../Assets/twitter.svg";
import person from "../../Assets/person.svg";
import mail from "../../Assets/mail.svg";

const ourCities = () => {
  return (
    <div id="ourCities-container">
      <h2>
        YOU CAN FIND US IN ALL PARTS OF THE WORLD.
        <br /> THESE ARE SOME OF THE PLACES WHERE YOU CAN FIND US
      </h2>
      <hr />
      <div className="city-container">
        <div className="city-item-container">
          <img src={newYork} alt="iphone" />
          <h4>NEW YORK</h4>
          <div className="city-item-wrapper">
            <img className="city-icons" src={person} alt="city one" />
            <p>244 Madison Ave</p>
          </div>
          <div className="city-item-wrapper">
            <img className="city-icons" src={mail} alt="city two" />
            <a href="#nyfood">ny_food@gmail.com</a>
          </div>
          <div className="city-item-wrapper">
            <img className="city-icons" src={twitter} alt="city three" />
            <a href="#nyfood">@nyfood</a>
          </div>
        </div>
        <div className="city-item-container">
          <img src={london} alt="iphone" />
          <h4>LONDON</h4>
          <div className="city-item-wrapper">
            <img alt="city icons" className="city-icons" src={person} />
            <p>St.James's 528</p>
          </div>
          <div className="city-item-wrapper">
            <img alt="city icons" className="city-icons" src={mail} />
            <a href="#london">london_food@gmail.com</a>
          </div>
          <div className="city-item-wrapper">
            <img alt="city icons" className="city-icons" src={twitter} />
            <a href="#london">@londonfood</a>
          </div>
        </div>
        <div className="city-item-container">
          <img alt="city icons" src={paris} />
          <h4>PARIS</h4>
          <div className="city-item-wrapper">
            <img alt="city icons" className="city-icons" src={person} />
            <p>Puteadux 92800</p>
          </div>
          <div className="city-item-wrapper">
            <img alt="city icons" className="city-icons" src={mail} />
            <a href="#paris">paris_food@gmail.com</a>
          </div>
          <div className="city-item-wrapper">
            <img alt="city icons" className="city-icons" src={twitter} />
            <a href="#paris">@parisfood</a>
          </div>
        </div>
        <div className="city-item-container">
          <img src={tokyio} alt="iphone" />
          <h4>TOKYIO</h4>
          <div className="city-item-wrapper">
            <img className="city-icons" src={person} alt="city icon" />
            <p>Shibuya-ku 2355</p>
          </div>
          <div className="city-item-wrapper">
            <img className="city-icons" src={mail} alt="city icon" />
            <a href="#tokyo">tokyio_food@gmail.com</a>
          </div>
          <div className="city-item-wrapper">
            <img className="city-icons" src={twitter} alt="city icon" />
            <a href="#tokyo">@tokyiofood</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ourCities;
