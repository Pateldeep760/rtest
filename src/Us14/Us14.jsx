import React, { useState } from 'react';
import './Us14.scss';

const Us14 = () => {
  const [cart, setCart] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0); 

  const items = [
    { id: 1, name: 'Apple', price: 100 },
    { id: 2, name: 'Banana', price: 50 },
    { id: 3, name: 'Orange', price: 75 },
  ];

  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setTotalPrice((prevTotal) => prevTotal + item.price); 
  };

  return (
    <div className="Us14Main">
      <h2>Shopping Cart</h2>
      <h3>Items:</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price.toFixed(2)}
            <button onClick={() => addItemToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h3>Cart:</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total Price: {totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Us14;