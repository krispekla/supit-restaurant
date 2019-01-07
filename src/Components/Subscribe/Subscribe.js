import React from "react";
import "./Subscribe.css";

const subscribe = () => {
  return (
    <div id="subscribe-container">
      <h2>SUBSCRIBE TO SAVE MONEY</h2>
      <hr />
      <div className="subscribe-wrapper">
        <div className="subscribe-item">
          <h4>TERMINATOR</h4>
          <p>
            $219<span>/month</span>
          </p>
          <p>7.30$ / per meal</p>
          <ul>
            <li>1 meal every day</li>
            <li>1 meal every day</li>
            <li>1 meal every day</li>
            <li>1 meal every day</li>
          </ul>
          <button className="btn btn-primary" type="submit" onClick="">
            Sign up now
          </button>
        </div>

        <div className="subscribe-item">
          <h4>EATER</h4>
          <p>
            $219<span>/month</span>
          </p>
          <p>7.30$ / per meal</p>
          <ul>
            <li>1 meal every day</li>
            <li>1 meal every day</li>
            <li>1 meal every day</li>
            <li>1 meal every day</li>
          </ul>
          <button className="btn btn-primary" type="submit" onClick="">
            Sign up now
          </button>
        </div>

        <div className="subscribe-item">
          <h4>STARTER</h4>
          <p>
            $219<span>/month</span>
          </p>
          <p>7.30$ / per meal</p>
          <ul>
            <li>1 meal every day</li>
            <li>1 meal every day</li>
            <li>1 meal every day</li>
            <li>1 meal every day</li>
          </ul>
          <button className="btn btn-primary" type="submit" onClick="">
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
};

export default subscribe;
