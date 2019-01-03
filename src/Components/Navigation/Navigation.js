import React from "react";
import sign from "../../Assets/sign.png";
import "./Navigation.css";

const navigation = () => {
  return (
    <nav>
      <a class="nav-link active" href="#">
        <img src={sign} alt="Smiley face" height="48" width="48" />
      </a>

      <a class="nav-link active" href="#">
        ORDER
      </a>

      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Delivery
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Mobile App
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Our Cities
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Subscriptions
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contact us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navigation;
