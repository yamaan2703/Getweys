import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";

function AppCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: "ondemand", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="">
      <div key="1" className="px-3">
        <img src={image1} alt="Image 1" />
      </div>
      <div key="2" className="px-3">
        <img src={image2} alt="Image 2" />
      </div>
      <div key="3" className="px-3">
        <img src={image3} alt="Image 3" />
      </div>
      <div key="4" className="px-3">
        <img src={image4} alt="Image 4" />
      </div>
      <div key="5" className="px-3">
        <img src={image5} alt="Image 5" />
      </div>
      <div key="6" className="px-3">
        <img src={image6} alt="Image 6" />
      </div>
      <div key="7" className="px-3">
        <img src={image7} alt="Image 7" />
      </div>
    </Slider>
  );
}

export default AppCarousel;
