import React from 'react'
import { useNavigate } from 'react-router-dom'
function Success() {
  const Navigate=useNavigate();
  return (
    <div>
      <h1>Payment Successfully</h1>

      <h3>thank you for shopping</h3>

      <button onClick={()=> Navigate("/")}>Continue Shopping</button>
    </div>
  )
}

export default Success
