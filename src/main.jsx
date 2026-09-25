import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Demo from './Demo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, RouterProvider } from'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext.jsx';
import ErrorBoundary from './Component/ErrorBoundary.jsx';
import { CartProvider } from './Context/CartContext.jsx';

createRoot(document.getElementById('root')).render(

    // <RouterProvider router={Router} />  
   <ThemeProvider>
     <ErrorBoundary>
       <CartProvider>
          <BrowserRouter>
             <App/>
          </BrowserRouter>
        </CartProvider> 
     </ErrorBoundary>
       
   </ThemeProvider>
)
