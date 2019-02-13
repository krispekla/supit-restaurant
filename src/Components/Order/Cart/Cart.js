import React from "react";
import "./Cart.css";
import ReactTooltip from "react-tooltip";

const cart = props => {
  let suma = 0;
  const order = props.orderList.map(it => {
    suma += it.Cijena * it.quantity;
    return (
      <tr key={it.Naziv + it.JeloID + suma}>
        <td colSpan="2">{it.JeloId}</td>
        <td colSpan="4">
          {it.Naziv}{" "}
          {it.remark ? (
            <div
              data-tip={it.remark}
              data-place="right"
              className="badge badge-pill badge-warning"
            >
              !
            </div>
          ) : null}
          <ReactTooltip />
        </td>
        <td colSpan="3">{it.quantity} </td>
        <td colSpan="3">{it.Cijena}kn</td>
      </tr>
    );
  });
  return (
    <div className="orderColumn">
      <table>
        <thead>
          <tr>
            <th colSpan="12">YOUR ORDERS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="2">ID</th>
            <th colSpan="4">TITLE</th>
            <th colSpan="3">QUANTITY</th>
            <th colSpan="3">PRICE</th>
          </tr>
          {order}
          <tr>
            <td colSpan="10" className="totalText">
              Total:
            </td>
            <td colSpan="2" className="totalValue">
              {suma ? suma : 0}.00kn
            </td>
          </tr>
        </tbody>
      </table>
      {props.popover ? (
        <div className="popoverr">
          <h4>{props.selectedItem.Naziv}</h4>
          <form onSubmit={props.orderFoodHandler}>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              name="quantity"
              className="form-group"
              id="colFormLabel"
              defaultValue="1"
            />
            <label htmlFor="remark">Remark:</label>
            <textarea
              name="remark"
              className="form-group "
              id="exampleFormControlTextarea1"
              rows="3"
            />
            <button className="btn btn-danger  btn-block" type="submit">
              Order
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default cart;
