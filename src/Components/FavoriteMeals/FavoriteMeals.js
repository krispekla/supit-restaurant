import React from "react";
import "./FavoriteMeals.css";
import ModalImage from "react-modal-image";

import pizza from "../../Assets/pizza.jpg";
// import hambi from "../../Assets/hambi.jpeg";
// import burger from "../../Assets/burger.jpg";
// import thai from "../../Assets/thai.jpg";
// import philip from "../../Assets/philip.jpg";

const favoriteMeals = () => {
  return (
    <div id="favoriteMeals-container">
      <h2>SHOWCASE OF OUR FAVORITE MEALS</h2>
      <hr />
      <div className="favoriteMeals-picture-container">
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={pizza}
            large={pizza}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={pizza}
            large={pizza}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={pizza}
            large={pizza}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={pizza}
            large={pizza}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={pizza}
            large={pizza}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={pizza}
            large={pizza}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={pizza}
            large={pizza}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={pizza}
            large={pizza}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
      </div>
    </div>
  );
};

export default favoriteMeals;
