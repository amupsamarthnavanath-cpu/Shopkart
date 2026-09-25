import './App.css'
import { useContext } from 'react';
import Navbar from './Component/Navbar.jsx';
import {Outlet,Routes, Route} from 'react-router-dom';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import Home from "./Pages/Home.jsx"
import { ThemeContext } from './Context/ThemeContext.jsx';
import Payment from './Pages/Payment.jsx';
import Success from './Pages/Success.jsx';



function App() {
  const {state}=useContext(ThemeContext)

  return (
  <>

    <div style={{
            backgroundColor: state.theme=='light' ? " #ebe2e2" : " #333",
            color:state.theme=='light' ? '#000' : '#065b94',
            minHeight:'100vh'
    }}>

      <Navbar />
      <Outlet />

        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Payment' element={<Payment/>}/>
       <Route path='/Success' element={<Success/>}/>
      </Routes>

    </div>

    

  </>
    
  )
  

}

export default App;
