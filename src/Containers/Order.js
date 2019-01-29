import React from "react";
import "./Order.css";
import Modal from "react-responsive-modal";
import Loader from "react-loader-spinner";
import OrderMenu from "../Components/Order/OrderMenu/OrderMenu";
import Cart from "../Components/Order/Cart/Cart";

class Order extends React.Component {
  state = {
    dataFetched: false,
    foodMenu: null,
    foodList: null,
    orderList: []
  };

  foodFlatter = foodMenu => {
    let foods = [];
    for (let i = 0; i < foodMenu.length; i++) {
      foodMenu[i].Ponuda.forEach(element => {
        foods.push(element);
      });
    }
    return foods;
  };

  handleFoodFetch = async () => {
    let { foodMenu, dataFetched, foodList } = this.state;

    if (!foodMenu) {
      try {
        const response = await fetch(
          "http://www.fulek.com/VUA/SUPIT/GetCategoriesAndFoods"
        );
        foodMenu = await response.json();
      } catch (error) {
        console.log(error);
      }
    }

    if (foodMenu) {
      dataFetched = true;
      foodList = this.foodFlatter(foodMenu);
      this.setState({ foodMenu, dataFetched, foodList });
    }
  };

  foodSelectHandler = item => {
    let { orderList, foodList } = this.state;
    orderList.push(foodList[item]);
    this.setState({ orderList });
  };

  componentDidMount() {
    if (!this.state.foodMenu) {
      setTimeout(() => {
        this.handleFoodFetch();
      }, 5500);
    }
  }

  render() {
    return (
      <Modal open={this.props.open} onClose={this.props.onCloseModal} center>
        <h2>ORDER & EAT</h2>

        <hr />
        {this.state.dataFetched ? (
          <div className="row">
            <div className="menuColumn">
              <OrderMenu
                foodMenu={this.state.foodMenu}
                foodSelectHandler={this.foodSelectHandler}
              />
            </div>
            <Cart orderList={this.state.orderList} />
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
          <div className="loader-container">
            <Loader
              className="loader"
              type="ThreeDots"
              color="rgb(125,203,255)"
              height={180}
              width={180}
            />
          </div>
        )}
      </Modal>
    );
  }
}

export default Order;
