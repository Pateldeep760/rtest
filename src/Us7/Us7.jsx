import React from 'react';
import { useState } from "react";
import './Us7.scss'


const Us7 = () => {
    const [toggle, setToggle] = useState(false)
    const switchbutton = () => setToggle(!toggle)
    
    return (

        <div className ='Us7Main'>
            <h2>Basic useState Usage</h2>
            <p>{toggle ? 'on':'off'}</p>
            <button onClick={switchbutton}>Switch ON/OFF</button>
        </div>
    );
};

export default Us7;