import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import { CartContext } from '../Context/CartContext';

function Navbar() {
  const{state,dispatch}=useContext(ThemeContext)
  const{state:st}=useContext(CartContext)
  return (
    <>
      <nav style={{ padding: '10px' }}>
        <Link to="/" style={{ margin: '10px' }}>Home</Link>
        <Link to="/product" style={{ margin: '10px' }}>Product</Link>
        <Link to="/Cart" style={{ margin: '10px' }}>Cart({ st.cart.length })</Link>
        <Link to="/Register" style={{ margin: '10px' }}>Register</Link>
        <Link to="/Login" style={{ margin: '10px' }}>Login</Link>
        
        <button onClick={()=>dispatch({type:'Toggle_theme'})}>
          {state.theme=='light' ? 'Dark' : 'light'}
        </button>
      </nav>
    </>
  );
}

export default Navbar;