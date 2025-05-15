import React from "react";
import Homepage from "./Homepage";
import ProductPannel from "./ProductPannel";
import ErrorPage from "./ErrorPage";
import AboutPanel from './AboutPanel'
import Navbar from "./Navbar";
import Loginpage from "./Loginpage";
const AppRoutes =
  [
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/products",
          element: <ProductPannel productType='womensFashion' poductKey="kurtas"/>,
        },
        {
          path: "/products/womens",
          element: <ProductPannel productType='womensFashion' poductKey="kurtas"/>,
        },
        {
          path: "/products/mens",
          element: <ProductPannel productType='men-fashion' poductKey="mensShirt"/>,
        },
        {
          path: "/about",
          element: <AboutPanel />,
        },
       
      ]
      
    },
    {
      path: "/login",
      element: <Loginpage/>
    },
    
  ]
;

export default AppRoutes;
