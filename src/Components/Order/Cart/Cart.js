import React from "react";
import "./Cart.css";

const cart = props => {
  // console.log(props.orderList);

  let suma = 0;
  const order = props.orderList.map(it => {
    suma += it.Cijena;
    return (
      <tr key={it.Naziv + it.JeloID + suma}>
        <td colSpan="2">{it.JeloId}</td>
        <td colSpan="4">{it.Naziv}</td>
        <td colSpan="3" />
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
    </div>
  );
};

export default cart;
