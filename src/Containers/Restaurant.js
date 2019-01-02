import React from "react";
import Navigation from "../Components/Navigation/Navigation";
import Intro from "../Components/Intro/Intro";
import Delivery from "../Components/Delivery/Delivery";
import FavoriteMeals from "../Components/FavoriteMeals/FavoriteMeals";
import MobileApp from "../Components/MobileApp/MobileApp";
import OurCities from "../Components/OurCities/OurCities";
import Reviews from "../Components/Reviews/Reviews";
import Subscribe from "../Components/Subscribe/Subscribe";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

class Restaurant extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Intro />
        <Delivery />
        <FavoriteMeals />
        <MobileApp />
        <OurCities />
        <Reviews />
        <Subscribe />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Restaurant;
