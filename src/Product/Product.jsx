import React from 'react'
import Productcomp from './Productcomp'

const Product = () => {
  return (
    <div className = 'product' display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <h1>Product data</h1>
        <Productcomp name="Laptop" price="1,11,000" desc="High performance laptop" />
        <Productcomp name="Smartphone" price="70,000" desc="Latest model smartphone" />
        <Productcomp name="Washingmachine" price="25,000" desc="Latest model washing machine" />
    </div>
  )
}

export default Product