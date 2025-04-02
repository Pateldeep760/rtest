import React, { useState } from 'react';
import './Us8.scss';

const Us8 = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(ab => ab + 1); 
  const decrement = () => setCount(ab => ab - 1); 

  return (
    <div className="Us8Main">
      <h2>Updating State Based on Previous State</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Us8;