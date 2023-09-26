import React from 'react';
import Pizza from 'components/Pizza';

import spinaciImg from '../images/pizzas/spinaci.jpg';
import funghiImg from '../images/pizzas/funghi.jpg';
import focacciaImg from '../images/pizzas/focaccia.jpg';
import margherittaImg from '../images/pizzas/margherita.jpg';
import prosciuttoImg from '../images/pizzas/prosciutto.jpg';
import salaminoImg from '../images/pizzas/salamino.jpg';

const pizzaData = [
  {
    name: 'Pizza Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: focacciaImg,
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: margherittaImg,
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: spinaciImg,
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: funghiImg,
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: salaminoImg,
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: prosciuttoImg,
    soldOut: false,
  },
];

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <menu className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map(pizza => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later 😊</p>
      )}

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
