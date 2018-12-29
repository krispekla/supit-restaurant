import React from "react";
import Video from "../../Assets/burger.mp4";

const intro = () => {
  return (
    <React.Fragment>
      <video className="video-background" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag
      </video>
    </React.Fragment>
  );
};

export default intro;
