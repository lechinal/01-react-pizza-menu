import React from 'react';
import Pizza from 'components/Pizza';
import spinaciImg from '../images/pizzas/spinaci.jpg';
import funghiImg from '../images/pizzas/funghi.jpg';

function Menu() {
  return (
    <menu className="menu">
      <h2>Our Menu</h2>

      <Pizza
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
      />
    </menu>
  );
}

export default Menu;
