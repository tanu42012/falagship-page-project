import { createBrowserRouter } from "react-router";
import App from "../App";

import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Favorites from "../Pages/Favorites";

import PhoneDetails from "../Pages/PhoneDetails";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";


 const router = createBrowserRouter([
    {
      path: "/",
      Component:MainLayout,
      errorElement:<ErrorPage></ErrorPage>,
      
      children:[
        {
            path: "/",
            Component:Home,
            hydrateFallbackElement:<p>Loading, please wait....</p>,
            loader:()=>fetch('../phones.json'),
        },
        {
          path:'/favorites',
          Component:Favorites,
          
        },
        {
          path:"/about",
          Component:About,
          
        },
        {
            path:"/phone-details/:id",
            hydrateFallbackElement:<p>Loading, please wait....</p>,
            
            Component:PhoneDetails,
            loader:()=>fetch('../phones.json'),
            
          },
        
      ]
    },
   
  ]);
  export default router;