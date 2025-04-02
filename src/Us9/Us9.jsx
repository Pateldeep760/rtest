import React, { useState } from 'react';
import './Us9.scss';

const Us9 = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  return (
    <div className="Us9Main">
      <h2>Handling Objects in State</h2>
      <p>{formData.name}</p>
      <p>{formData.email}</p>
      <input type="text" placeholder="Name" value={formData.name} onChange={e => setFormData({name: e.target.value})} />
      <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({email: e.target.value})} />

    </div>
  );
};

export default Us9;

