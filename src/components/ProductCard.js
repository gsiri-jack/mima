import React from "react";
import './style.css';
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  return (
    <div>
     <div className='card col-sm-6'>
  <img src={props.imgSrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.productName.slice(0,20)}...</h5>
    <p className="card-text" >{props.productPrice}</p>
    <Link className="btn btn-primary cartBtn" to={props.productTarget} target="_blank">Add to cart</Link> 
  </div>
</div>
<div>

</div>
    </div>
  );
}
function cartClicked(){
  alert("cart clicked")
}
