import React from "react";
import "./FavoriteMeals.css";
import ModalImage from "react-modal-image";
import fgf from "../../Assets/hambi.jpeg";
import fgf2 from "../../Assets/2.jpg";
const favoriteMeals = () => {
  return (
    <div id="favoriteMeals-container">
      <h2>SHOWCASE OF OUR FAVORITE MEALS</h2>
      <hr />
      <div className="favoriteMeals-picture-container">
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={fgf2}
            large={fgf2}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={fgf2}
            large={fgf2}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={fgf2}
            large={fgf2}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={fgf2}
            large={fgf2}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={fgf2}
            large={fgf2}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={fgf2}
            large={fgf2}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={fgf2}
            large={fgf2}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
        <div className="favoriteMeals-picture-wrapper">
          <ModalImage
            className="favoriteMeals-picture"
            small={fgf2}
            large={fgf2}
            hideDownload={true}
            hideZoom={true}
          />
        </div>
      </div>
    </div>
  );
};

export default favoriteMeals;
