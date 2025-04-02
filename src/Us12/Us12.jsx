import React, { useState } from 'react';
import './Us12.scss';

const Us12 = () => {
 
  const [randomNumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 100) + 1);

  return (
    <div className="Us12Main">
      <h2>Lazy Initialization in useState</h2>
      <p>Random Number: {randomNumber}</p>
      <button onClick={() => setRandomNumber(Math.floor(Math.random() * 100) + 1)}>
        Generate New Random Number
      </button>
    </div>
  );
};

export default Us12;