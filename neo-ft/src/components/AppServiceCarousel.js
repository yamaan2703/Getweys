import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import help1 from "../images/help1.png";
import help2 from "../images/help2.png";
import help3 from "../images/help3.png";
import help4 from "../images/help4.png";
import help5 from "../images/hep5.png";
import help6 from "../images/help6.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function AppServiceCarousel() {
  const slidesData = [
    {
      id: 1,
      title: "Project Consulting",
      desc: "Tailored consulting, offering expert guidance for streamlined project efficiency and success.",
      images: [help1],
    },
    {
      id: 2,
      title: "Collection Launch",
      desc: "Let us handle your NFT collection launch, ensuring a smooth and successful introduction.",
      images: [help2],
    },
    {
      id: 3,
      title: "Blockchain Solutions",
      desc: "Optimize operations with our tailored blockchain solutions, ensuring efficiency, security, integration.",
      images: [help3],
    },
    {
      id: 4,
      title: "Artwork Creations",
      desc: "Unlock your brand's potential with our exquisite NFT collection meticulously curated for the digital era.",
      images: [help4],
    },
    {
      id: 5,
      title: "Marketing Concept",
      desc: "Craft compelling campaigns, utilizing cutting-edge strategies for enhanced market penetration.",
      images: [help5],
    },
    {
      id: 6,
      title: "Video Production",
      desc: "Elevate storytelling with cinematic production, conveying impactful messages visually.",
      images: [help6],
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
            <div className=" p-5 m-2 md:m-2 lg:m-5 shadow-lg shadow-gray-500 rounded-xl">
              <div className="flex justify-center">
                <img src={slide.images[0]} className="m-1 px-1" alt="Art" />
              </div>
              <div className="my-3">
                <h1 className="font-bold">{slide.title}</h1>
                <p className="text-gray-500">{slide.desc}</p>
              </div>
              <div>
                <button class="transition duration-300 ease-in-out flex items-center text-md font-semibold rounded-full px-4 py-2 hover:bg-[#7A52F4] hover:text-white">
                  <span class="pr-3 text-xl">
                    <MdKeyboardArrowRight />
                  </span>{" "}
                  See more details
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AppServiceCarousel;
