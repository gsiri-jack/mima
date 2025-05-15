import React from 'react'
import { Link } from 'react-router-dom';
import '../style.css'
import '../../componentsCss/categoryBar.css'

export default function CateogryBar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg categoryBar">
        <div className="container-fluid category-navbar">
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                 <Link className="nav-link" to="/products/mens">Mens</Link> 
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/products/womens">Womens</Link> 
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/products/kids">kids</Link> 
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/products/electronics">Electronics</Link> 
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/products/Watches">Watches</Link> 
              </li>
              <li className="nav-item">
                 <Link className="nav-link" to="/products/Footwear">Footwear</Link> 
              </li>
            </ul>
          
          </div>
        </div>
      </nav>
    </>
  )
}
