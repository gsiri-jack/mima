import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './style.css'
import CategoryBar from './minCompoents/CateogryBar'
import { GrSearch } from "react-icons/gr";
import "../componentsCss/navbar.css"

export default function Navbar() {
 
  return (
    <>
      <nav className="navbar navbar-expand-lg NavItem">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Mima
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="*"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="*">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="*">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="*">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  products
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control searchBar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className= "btn  searchBtn" type="submit">
                <GrSearch/>
              </button>
             
            </form>
            
            <Link  className="nav-link active btn mx-3 signUpBtn" to="/login">sign up</Link>
           
         
          </div>
        </div>
      </nav>
      <CategoryBar/>
      <div className="Outlet1"><Outlet/></div>
    </>
  );
}
