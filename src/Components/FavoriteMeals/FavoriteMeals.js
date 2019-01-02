import React from "react";
import ModalImage from "react-modal-image";
import fgf from "../../Assets/hambi.jpeg";
import fgf2 from "../../Assets/2.jpg";
const favoriteMeals = () => {
  return (
    <div>
      <h2>SHOWCASE OF OUR FAVORITE MEALS</h2>
      <hr />
      <div className="omotac">
        <ModalImage
          className="tri"
          small={fgf2}
          large={fgf2}
          hideDownload={true}
          hideZoom={true}
        />
      </div>
    </div>
  );
};

export default favoriteMeals;
