import React from 'react';
import Pizza from 'components/Pizza';

// import spinaciImg from '../images/pizzas/spinaci.jpg';
// import funghiImg from '../images/pizzas/funghi.jpg';

const pizzaData = [
  {
    name: 'Pizza Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function Menu() {
  return (
    <menu className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map(pizza => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>

      <img src="pizzas/spinaci.jpg" alt="test" />

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName={spinaciImg}
        price={10}
      />

      <Pizza
        name="Pizza Fungi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName={funghiImg}
      /> */}
    </menu>
  );
}

export default Menu;
