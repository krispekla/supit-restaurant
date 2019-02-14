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
import Order from "./Order";

class Restaurant extends React.Component {
  state = {
    open: false,
    navOpacity: "navbar navOpacity",
    hamburger: true,
    hamburgerClassToggle: "hamburgerList hide"
  };

  modalSwitch = () => {
    let { open } = this.state;

    if (open) {
      open = false;
    } else {
      open = true;
    }
    this.setState({ open });
  };

  hamburgerListToggle = () => {
    let { hamburger, hamburgerClassToggle } = this.state;

    if (hamburger) {
      hamburger = false;
      hamburgerClassToggle = "hamburgerList";
    } else {
      hamburger = true;
      hamburgerClassToggle = "hamburgerList hide";
    }

    this.setState({ hamburger, hamburgerClassToggle });
  };

  componentDidMount() {
    let { navOpacity } = this.state;
    document.addEventListener("scroll", () => {
      if (window.pageYOffset < window.innerHeight - 200) {
        navOpacity = "navbar navOpacity";
      } else {
        navOpacity = "navbar";
      }
      this.setState({ navOpacity });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navigation
          modalSwitch={this.modalSwitch}
          navOpacity={this.state.navOpacity}
          hamburger={this.state.hamburger}
          hamburgerClassToggle={this.state.hamburgerClassToggle}
          hamburgerListToggle={this.hamburgerListToggle}
        />
        <Intro />
        <Delivery />
        <Order onCloseModal={this.modalSwitch} open={this.state.open} />
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
