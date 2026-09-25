import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const{state,dispatch} = useContext(CartContext)
  console.log(state.cart)
  var nav=useNavigate();
  return (
    <div>
      <h2>Cart Page</h2>
      {( state.cart.length==0 ) ? <h3>Card is Empty</h3>:(
        state.cart.map((item,index)=>(
          <div>
               <img src={item.image} height='150px' width='100px' />
               <h3>{item.title}</h3>
               <p>{item.description}</p>
               <h4>{item.price}</h4>
               <button onClick={()=>dispatch({ type:"Remove_From_Cart",index:index})}>
               REMOVE
               </button>
          </div>
        ))
      )}

    <button onClick={()=>nav("/Payment")}>Procced To Payment</button>

    </div>
  )
}

export default Cart
