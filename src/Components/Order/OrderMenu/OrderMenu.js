import React from "react";
import "./OrderMenu.css";

const orderMenu = props => {
  const foodMenu = props.foodMenu.map(menu => {
    let foodList = menu.Ponuda.map(item => {
      return (
        <tr key={item.JeloId}>
          <td>
            {item.Naziv}
            <br />
            <small>{item.Opis}</small>
          </td>
          <td>
            <button className="btn btn-primary">{item.Cijena}.00kn</button>
          </td>
        </tr>
      );
    });

    return (
      <React.Fragment key={menu.Naziv}>
        <thead>
          <tr>
            <th colSpan="2">{menu.Naziv}</th>
          </tr>
        </thead>
        <tbody>{foodList}</tbody>
      </React.Fragment>
    );
  });

  console.log(foodMenu);
  return <table>{foodMenu}</table>;
};

export default orderMenu;
