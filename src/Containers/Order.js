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
    orderList: [],
    selectedItem: null,
    popover: false
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
    let { selectedItem, popover } = this.state;
    selectedItem = item;
    popover = !popover;
    this.setState({
      selectedItem,
      popover
    });
  };

  updatingOrderList = newItem => {
    let { selectedItem, orderList } = this.state;
    console.log(newItem, selectedItem, orderList);
    orderList[
      orderList.findIndex(el => el.JeloId === selectedItem.JeloId)
    ].quantity =
      parseInt(newItem.quantity) +
      parseInt(
        orderList[orderList.findIndex(el => el.JeloId === selectedItem.JeloId)]
          .quantity
      );

    orderList[
      orderList.findIndex(el => el.JeloId === selectedItem.JeloId)
    ].remark += newItem.remark;

    console.log("--------------------------------------------");
    console.log(newItem, selectedItem, orderList);

    this.setState({ orderList });
  };

  orderFoodHandler = e => {
    e.preventDefault();
    let { selectedItem, foodList, orderList, popover } = this.state;
    let newItem = foodList.find(el => el.JeloId === selectedItem.JeloId);

    newItem.quantity = e.target.quantity.value;
    newItem.remark = e.target.remark.value;
    //Checking if food is already added
    if (orderList.find(el => el.JeloId === selectedItem.JeloId)) {
      this.updatingOrderList(newItem);
    } else {
      orderList.push(newItem);
    }

    popover = !popover;
    this.setState({
      selectedItem,
      foodList,
      orderList,
      popover
    });
  };

  componentDidMount() {
    if (!this.state.foodMenu) {
      setTimeout(() => {
        this.handleFoodFetch();
      }, 4500);
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
            <Cart
              orderList={this.state.orderList}
              popover={this.state.popover}
              orderFoodHandler={this.orderFoodHandler}
              selectedItem={this.state.selectedItem}
            />
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
