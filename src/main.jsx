import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {

  Router,
  RouterProvider,
} from "react-router";
import router from './Routes/Routes';
import CartProvider from './Providers/CartProvider';





createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CartProvider>
  <RouterProvider router={router}></RouterProvider>
  </CartProvider>
  </StrictMode>,
  
)
