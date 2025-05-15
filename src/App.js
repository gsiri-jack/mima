import React from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/routerData";
import Homepage from "./components/Homepage";
import ErrorPage from "./components/ErrorPage";
import HomePanel from "./components/HomePanel";
import ProductPanel from "./components/ProductPannel";
import AboutPanel from "./components/AboutPanel";

function App() {
  const router = createBrowserRouter(AppRoutes);
  
  return (
    <>
    
    <RouterProvider router={router}>
      
    </RouterProvider>
    </>
  );
}

export default App;
