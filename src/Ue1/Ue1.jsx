import React from 'react'
import './Ue1.scss'
import { useState, useEffect } from 'react'

const Ue1 = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });

    return (
        <div className='Ue1Main'>
            <h1>Use Effect Eaxmple 1</h1>
            <h2>I have rendered {count} times!</h2>

        </div>
    )

}

export default Ue1