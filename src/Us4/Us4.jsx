import React, { useState } from 'react'
import './Us4.scss'

const Us4 = () => {
    const [change, setChange] = useState(false)
    console.log(change)
    return (
        <div class='Us4Main'>
            <p> {change ? 'on' : 'off'}</p>
            <button onClick={() => setChange(!change)}>click</button>
           
        </div>
    )
    
}

export default Us4