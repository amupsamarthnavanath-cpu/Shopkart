import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { useNavigate } from 'react-router-dom';


function Payment() {
  const{state, dispatch}=useContext(CartContext);
  const nav=useNavigate();

  const total=state.cart.reduce((sum,item)=>sum+item.price,0)

  function handlerFunction(){
     dispatch({ type:"Clear_Cart"})
  }

  return (
    <>
      <h1>Payment Page</h1>
      <h2>Total amount:{total}</h2>
      Card Number:
      <input type='text' placeholder='Enter Card Number'/>
      Exp Date:
      <input type='text' placeholder='Enter Expiry Date'/>
      CVV:
      <input type='text' placeholder='Enter CVV Number'/>

      {/* <button onClick={()=>nav('/Success')}>Pay Now</button> */}
      <button onClick={handlerFunction}>Pay Now</button>
    </>
  )
}

export default Payment
