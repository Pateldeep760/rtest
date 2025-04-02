import React, { useState } from 'react'
import './Us2.scss'

const Us2 = () => {
    const [ab, setAb] = useState(0)
    const plus = () => { ab < 10 ? setAb(ab + 1) : setAb(10) }
    const minus = () => { ab > 0 ? setAb(ab - 1) : setAb(0) }
    return (

        <div class='Us2Main'>
            <button onClick={plus}>plus</button>
            <p>{ab}</p>
            <button onClick={minus}>minus</button>
        </div>
    )
}

export default Us2