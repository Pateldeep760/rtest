import React, { useState } from 'react'
import './Us3.scss'

const Us3 = () => {
    const [change, setChange] = useState('off')
    const handle = () => { change == 'off' ? setChange('on') : setChange('off') }
    return (
        <div class='Us3Main'>
            <p>{change}</p>
            <button onClick={handle}>click</button>
        </div>
    )
}

export default Us3