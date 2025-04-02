import React, { useState } from 'react';
import './Us10.scss';

const Us10 = () => {
  const [todoList, setTodoList] = useState([]); 
  const [newItem, setNewItem] = useState(''); 

  const addItem = () => {
    if (newItem.trim() !== '') {
      setTodoList((prevList) => [...prevList, newItem]); 
      setNewItem(''); 
    }
  };

  const deleteItem = (index) => {
    setTodoList((prevList) => prevList.filter((_, i) => i !== index)); 
  };

  return (
    <div className="Us10Main">
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Add a new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} 
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Us10;