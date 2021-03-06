import React from "react";
import "./Intro.css";
import Video from "../../Assets/hamburger.mp4";
// import sign from "../../Assets/sign.png";
import sign from "../../Assets/logo4.png";

const intro = () => {
  return (
    <React.Fragment>
      <video className="video-background" id="intro" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag
      </video>
      <img id="intro-sign" src={sign} alt="website_sign" />
    </React.Fragment>
  );
};

export default intro;
