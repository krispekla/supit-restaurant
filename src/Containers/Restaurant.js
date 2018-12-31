import React from "react";
import Navigation from "../Components/Navigation/Navigation";
import Intro from "../Components/Intro/Intro";
import Delivery from "../Components/Delivery/Delivery";
class Restaurant extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Intro />
        <Delivery />
        {/*<MobileApp />
        <OurCities />
        <Subscriptions />
        <Contact />
        <Footer /> */}
      </React.Fragment>
    );
  }
}

export default Restaurant;
