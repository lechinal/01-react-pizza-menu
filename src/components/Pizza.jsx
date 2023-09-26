import React from 'react';
// import spinaciImg from '../images/pizzas/spinaci.jpg';
// import funghiImg from '../images/pizzas/funghi.jpg';

function Pizza(props) {
  // console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span> {props.pizzaObj.price} </span>
      </div>
    </li>
  );
}

export default Pizza;
