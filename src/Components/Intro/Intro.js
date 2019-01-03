import React from "react";
import "./Intro.css";
import Video from "../../Assets/burger.mp4";
import sign from "../../Assets/sign.png";

const intro = () => {
  return (
    <React.Fragment>
      <video className="video-background" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag
      </video>
      <img id="intro-sign" src={sign} alt="website_sign" />
    </React.Fragment>
  );
};

export default intro;
