import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";


function AppCarousel() {
  const slidesData = [
    {
      id: 1,
      title: "Celestial Spirits",
      items: 2222,
      images: [img7, img1, img2],
    },
    {
      id: 2,
      title: "Celestial Spirits",
      items: 2222,
      images: [img8, img3, img4],
    },
    {
      id: 3,
      title: "Celestial Spirits",
      items: 2222,
      images: [img9, img5, img6],
    },
    {
        id: 4,
        title: "Celestial Spirits",
        items: 2222,
        images: [img7, img5, img6],
      },
      {
        id: 5,
        title: "Celestial Spirits",
        items: 2222,
        images: [img8, img5, img6],
      },
      {
        id: 6,
        title: "Celestial Spirits",
        items: 2222,
        images: [img9, img5, img6],
      },

  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <div className="slider-container">
      <Slider {...settings} className="slick-slider">
        {slidesData.map((slide) => (
          <div key={slide.id} className="slick-slide">
            <div className="bg-white p-5 m-2 shadow-xl rounded-xl">
              <div className="flex">
                <div>
                  <img src={slide.images[0]} className="m-1 px-1" alt="Art" />
                </div>
                <div>
                  <img src={slide.images[1]} className="m-1" alt="Image 1" />
                  <img src={slide.images[2]} className="m-1" alt="Image 2" />
                </div>
              </div>
              <div className="my-2">
                <h1 className="font-bold text-xl">{slide.title}</h1>
                <p>
                  <span className="font-bold">{slide.items}</span> items
                </p>
              </div>
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AppCarousel;
