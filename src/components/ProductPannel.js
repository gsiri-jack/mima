import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import data from '../productsDatabas.json';
import './style.css';

export default function ProductPanel(props) {
const data2=data[props.productType]
const key=props.poductKey
console.log(key)
var type=null
const products=data2[0][key]||[]


const sam=data.womensFashion[0]
console.log(typeof(sam),sam.kurtas[1])
  return (
 
    <div className='window' style={{"margin":"auto"}}>
      { products.map(user => (
        <div key={user.id} className='noName'>
          <ProductCard imgSrc={user.imgsrc2} productName={user.name} productPrice={user.discountPrice} productTarget={user.cueLink}/>
        </div>
      ))}
      {/* <ProductCard imgSrc={products.imgsrc2} productName={products.name} productPrice={products.discountPrice} /> */}
    </div>
  );
  
}
