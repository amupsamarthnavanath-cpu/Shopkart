import React, { memo, useContext } from 'react'
import '../Component/ProductCard.css'
import { CartContext } from '../Context/CartContext'

function Productcard({ image, title, price, description }) {
  const{dispatch}=useContext(CartContext);

  return (
    <div className="card">
      <img style={{ height: "200px" }} src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{price}</h4>
      <button onClick={()=>dispatch({ type:"Add_To_Cart", payload:{image,title,price}})}>
        ADD TO CART
      </button>
    </div>
  )
}

export default memo(Productcard)