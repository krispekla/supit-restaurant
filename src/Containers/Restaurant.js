import React from "react";
import Navigation from "../Components/Navigation/Navigation";
import Intro from "../Components/Intro/Intro";

class Restaurant extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Intro />
        {/*  <Delivery />
        <MobileApp />
        <OurCities />
        <Subscriptions />
        <Contact />
        <Footer /> */}
      </React.Fragment>
    );
  }
}

export default Restaurant;
