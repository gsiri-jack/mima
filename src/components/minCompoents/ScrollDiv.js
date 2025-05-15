import React, {useState, useEffect } from 'react';
import '../style.css'; // Import your CSS file for styling
import icon1 from "../../assets/Scrollicons/ajio.png"
import icon2 from "../../assets/Scrollicons/amazon.png"
import icon3 from "../../assets/Scrollicons/flipkart.jpg"
import icon4 from "../../assets/Scrollicons/firstcry.png"
import icon5 from "../../assets/Scrollicons/meesho.jpg"
import icon6 from "../../assets/Scrollicons/myntra.png"
import icon7 from "../../assets/Scrollicons/nykaa.png"
import icon8 from "../../assets/Scrollicons/tata.png"


const ScrollDiv = () => {
    // const [scrollPosition, setScrollPosition] = useState(0);

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const verticalScrollPosition = window.scrollY;
    //     setScrollPosition(verticalScrollPosition);
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   }; style={{ transform: `translateX(-${scrollPosition+5}px)` }}
    // }, []);
  
    return (
      <marquee>
        
      <div className="scroll-horizontal">
        <div className="inner-div">
        <div className="child-div"><img src={icon1} className='partnerDiv'/></div>
        <div className="child-div"><img src={icon2} className='partnerDiv'/></div>
        <div className="child-div"><img src={icon3}className='partnerDiv'/></div>
        <div className="child-div"><img src={icon4}className='partnerDiv'/></div>
        <div className="child-div"><img src={icon5}className='partnerDiv'/></div>
        <div className="child-div"><img src={icon6}className='partnerDiv'/></div>
        <div className="child-div"><img src={icon7}className='partnerDiv'/></div>
        <div className="child-div"><img src={icon8}className='partnerDiv'/></div>
       
        </div>
      </div>
      </marquee>
    );
  };
  
export default ScrollDiv;
