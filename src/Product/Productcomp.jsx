import React from 'react'
import './Product.scss'

const Productcomp = ({name, price, desc}) => {
  return (
    <div className ="productcard"> 
    <h3 className='productName'>{name}</h3>
    <p className='productPrice'>{price} </p>
    <p className='productDesc'>{desc} </p>
    </div>
  )
}

export default Productcomp