import React, { useState } from 'react'
import './Abcd.scss'

const Abcd = () => {
    const[ab,setAb]=useState(2)
  return (
    <div>
    <div>{ab}</div>
    <button onClick={()=>setAb('dmndv')}>ClickMe</button>
    {ab?<div>Ouput Text</div>:null}
    </div>
  )
}

export default Abcd