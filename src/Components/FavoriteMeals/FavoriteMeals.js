import React from "react";
import "./FavoriteMeals.css";
import ModalImage from "react-modal-image";

import beef from "../../Assets/beef.jpg";
import soup from "../../Assets/soup.jpg";
import burger from "../../Assets/burger.jpg";
import beefkebab from "../../Assets/beefkebab.jpg";
import submarine3italian from "../../Assets/submarine3italian.jpg";
import philip from "../../Assets/philip.jpg";
import pizza from "../../Assets/pizza.jpg";
import steak from "../../Assets/steak.jpg";

const favoriteMeals = () => {
  return (
    <div id="favoriteMeals-container">
      <h2>SHOWCASE OF OUR FAVORITE MEALS</h2>
      <hr />
      <div className="favoriteMeals-picture-container">
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={burger}
            large={burger}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={beefkebab}
            large={beefkebab}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={beef}
            large={beef}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={soup}
            large={soup}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={steak}
            large={steak}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={philip}
            large={philip}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={submarine3italian}
            large={submarine3italian}
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
