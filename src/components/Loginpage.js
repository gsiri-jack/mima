import React, { useState } from "react";
import "../componentsCss/loginPage.css";
import ProductCard from "./ProductCard";
import data from "../productsDatabas.json";
import Marquee from "react-fast-marquee";
import regIcon1 from "../assets/icons/profileReg1.svg";
import accountIcon from "../assets/icons/person.svg";
import passwordIcon from "../assets/icons/password.svg";
import eyeIcon2 from "../assets/icons/eyecopy.svg";
import eyeCloseIcon from "../assets/icons/eyeClosed.svg";
import mail from "../assets/icons/mail.svg";
export default function Loginpage() {
  const [showPassword, setshowPassword] = useState("password");
  const [side, setside] = useState(true);
  const [visible, setvisible] = useState(true);
  function passwordVisibilty() {}
  function shiftLoginUi(event) {
    event.preventDefault();
    setside(!side);
    setTimeout(() => {
      setvisible(!visible);
    }, 200);
  }
  const productsItems = data["topitems"] || [];

  return (
    <div className="login_page">
        <Marquee direction="up" autoFill={true} className="marqueeBox">
        {productsItems.map((user) => (
            <div key={user.id} className="items" style={{"minWidth":17}}>
              <ProductCard
                imgSrc={user.imgsrc2}
                productName={user.name}
                productPrice={user.discountPrice}
              />
            </div>
          ))}
          </Marquee>
         
      <div className="AdBar">
        
      
        
     
      
       
        </div>
      <div className="BgBar"></div>
      <div className="login-cont">
        <div className={side ? "loginHero" : "loginHeroAlt"}></div>
        <div
          className={`regSlide text-center ${
            visible ? "visible" : "invisible"
          }`}
        >
          <div>
            <div>
              <img className="registerIcon" src={regIcon1} />
            </div>
            <h6>Don't have an account? Join us now.</h6>
            <button className="btn registerBtn" onClick={shiftLoginUi}>
              register
            </button>
          </div>
        </div>
        <div className="form-container">
          <div className={`formDet ${visible ? "visible" : "invisible"}`}>
            <div className="loginHead">
              <h2>hello Welcome Back</h2>
            </div>
            <div className="emailCont">
              <img src={accountIcon}></img>
              <input typeof="email" type="email" placeholder="name@email.com" />
              <img src={eyeIcon2}></img>
            </div>
            <div className="passwordCont">
              <img src={passwordIcon}></img>

              <input typeof="password" type="password"  placeholder="password" />
              <img src={eyeCloseIcon}></img>
            </div>
            <a href="/error">forgot password?</a>
            <div className="loginBtnDiv">
              <button className="loginButton btn" onClick={shiftLoginUi}>
                Login
              </button>
            </div>
          </div>
        </div>
        <div
          className={`loginStarter text-center ${
            !visible ? "visible" : "invisible"
          }`}
        >
          <div>
            <img className="registerIcon" src={regIcon1} />
          </div>
          <p>Already have an account?</p>
          <button className="btn registerBtn" onClick={shiftLoginUi}>
            Login now
          </button>
        </div>
        <div className={`regForm ${!visible ? "visible" : "invisible"}`}>
          <div className="regDet">
          <div className="regName" >
          <img src={accountIcon}></img>

            <label></label>
            <input typeof="text" placeholder="firstname" />
            <input typeof="text" placeholder="lastname" />
          </div>
          <div className="regEmail" >
          <img src={mail}></img>

            <label></label>
            <input typeof="text" type="Email"  placeholder="name@email.com" />
          </div>
          <div className="regPassword" >
          <img src={passwordIcon}></img>

            <label></label>
            <input typeof="password" type="password" placeholder="passsword" />
          </div>
          <div className="regPassword" >
          <img src={passwordIcon}></img>

            <label></label>
            <input typeof="password" type="password"  placeholder="confirm passsword" />
          </div>
          <div className="regPassword" >
            <label></label>
            <button className="regBtn btn" onClick={shiftLoginUi}>
                Login
              </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
