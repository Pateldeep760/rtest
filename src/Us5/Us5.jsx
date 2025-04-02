import React, { useState } from 'react'
import './Us5.scss'

const Us5 = () => {
    const [cd, setCd] = useState('')
    return (
        <div class='Us5Main'>
            <p>{cd}</p>
            <input type="text" value={cd} onChange={(e) => setCd(e.target.value)} />
        </div>
    )

}

export default Us5