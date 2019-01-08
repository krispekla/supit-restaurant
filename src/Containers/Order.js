import React from "react";
import "./Order.css";
import Modal from "react-responsive-modal";
import OrderMenu from "../Components/Order/OrderMenu/OrderMenu";

class Order extends React.Component {
  state = {
    dataFetched: false,
    foodMenu: null
  };

  handleFoodFetch = async () => {
    let { foodMenu, dataFetched } = this.state;

    if (!foodMenu) {
      try {
        const response = await fetch(
          "http://www.fulek.com/VUA/SUPIT/GetCategoriesAndFoods"
        );
        foodMenu = await response.json();
        console.log(foodMenu);
      } catch (error) {
        console.log(error);
      }
    }

    if (foodMenu) {
      dataFetched = true;
      this.setState({ foodMenu, dataFetched });
    }
  };
  componentDidMount() {
    if (!this.state.foodMenu) {
      this.handleFoodFetch();
    }
  }
  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onCloseModal} center>
        <h2>ORDER & EAT</h2>

        {this.state.dataFetched ? (
          <div className="row">
            <div className="column">
              <OrderMenu foodMenu={this.state.foodMenu} />
            </div>
            <div className="column">
              <h2>Column 2</h2>
              <p>Some text..</p>
            </div>
          </div>
        ) : (
          <p>Fetching data</p>
        )}
      </Modal>
    );
  }
}

export default Order;
