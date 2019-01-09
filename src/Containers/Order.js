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
            <div className="menuColumn">
              <OrderMenu foodMenu={this.state.foodMenu} />
            </div>
            <div className="orderColumn">
              <table>
                <thead>
                  <tr>
                    <th colSpan="12">YOUR ORDERS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2">12</td>
                    <td colSpan="4">naziv patke</td>
                    <td colSpan="3">12</td>
                    <td colSpan="3">42kn</td>
                  </tr>
                </tbody>
              </table>
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
