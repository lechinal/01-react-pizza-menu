import React from 'react';
import Pizza from 'components/Pizza';

function Menu() {
  return (
    <menu className="menu">
      <h2>Our Menu</h2>

      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="images/pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Fungi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="images/pizzas/funghi.jpg"
      />
    </menu>
  );
}

export default Menu;
