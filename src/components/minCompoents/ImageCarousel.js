import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../componentsCss/imageCarousel.css'
const ImageCarousel = ({ items }) => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // // Automatically advance to the next slide every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((currentSlide + 1) % items.length);
  //   }, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval);
  // }, [currentSlide, items.length]);
console.log(items[0]["image"])
  return (
    <Carousel fade pause={false} indicators={false}>
      
        <Carousel.Item interval={2000} >
        <img
          className="d-block carouselImg w-100 height-90"
          src={items[0]["image"]}
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
          className="d-block carouselImg w-100"
          src={items[1]["image"]}
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
          className="d-block carouselImg w-100"
          src={items[2]["image"]}
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
          className="d-block carouselImg w-100"
          src={items[3]["image"]}
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
          className="d-block carouselImg w-100"
          src={items[4]["image"]}
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
          className="d-block carouselImg w-100"
          src={items[5]["image"]}
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
          className="d-block carouselImg w-100"
          src={items[6]["image"]}
          alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
          className="d-block carouselImg w-100"
          src={items[7]["image"]}
          alt="First slide"
        />
        </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
