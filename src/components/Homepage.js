import React, { useEffect, useState } from "react";
import "./style.css";
import ImageCarousel from "./minCompoents/ImageCarousel";
import carouselData from "./minCompoents/carouseldata";
import ProductCard from "./ProductCard";
import data from "../productsDatabas.json";
import ScrollDiv from "./minCompoents/ScrollDiv";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Homepage() {
  const productsItems = data["topitems"] || [];
  return (
    <>
  {/* <Navbar/> */}
      <div className="container home-grid-container">
        <div className="row home-banner-container">
          <div className="col">
            <ImageCarousel items={carouselData} fade/>
            <h2 className="text-center">Popular Stores</h2>
            <ScrollDiv>
            
            </ScrollDiv>
          </div>
        </div>
        <div className="row homePage-products">
          {productsItems.map((user) => (
            <div key={user.id} className="col" style={{"minWidth":17}}>
              <ProductCard
                imgSrc={user.imgsrc2}
                productName={user.name}
                productPrice={user.discountPrice}
              />
            </div>
          ))}
        </div>
        <div className="row">
        
        </div>

      </div>
      {/* <div><Outlet/></div> */}
    </>

  );
}
