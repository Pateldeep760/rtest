import React, { useState } from 'react';
import './Us13.scss';

const Us13 = () => {
  const [activeIndex, setActiveIndex] = useState(null); 

  const toggleAnswer = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); 
  };

  const faqData = [
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'What is a component?', answer: 'A component is a reusable piece of UI in React.' },
    { question: 'What is state in React?', answer: 'State is a way to manage dynamic data in a React component.' },
  ];

  return (
    <div className="Us13Main">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((item, index) => (
          <li key={index}>
            <div onClick={() => toggleAnswer(index)} className="question">
              {item.question}
            </div>
            {activeIndex === index && <div className="answer">{item.answer}</div>} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Us13;