import React, { useEffect, useRef } from "react";
import header1 from "../images/header1.png";
import header2 from "../images/header2.png";
import art1 from "../images/art1.png";
import art2 from "../images/art2.png";
import art3 from "../images/art3.png";
import art4 from "../images/art4.png";
import art5 from "../images/art5.png";
import art6 from "../images/art6.png";
import art7 from "../images/art7.png";
import art8 from "../images/art8.png";
import art9 from "../images/art9.png";
import art10 from "../images/art10.png";
import img7 from "../images/img7.png";
import img10 from "../images/img10.png";
import img11 from "../images/img11.png";
import img12 from "../images/img12.png";
import img13 from "../images/img13.png";
import img14 from "../images/img14.png";
import img15 from "../images/img15.png";
import img16 from "../images/img16.png";
import img17 from "../images/img17.png";
import AOS from "aos";
import "aos/dist/aos.css";

import AppCarousel from "../components/AppCarousel";
import AppBtn from "../components/AppBtn";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import AppServiceCarousel from "../components/AppServiceCarousel";

function Explore() {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); 
  }, []);
  const collectionData = [
    {
      id: 1,
      image: art1,
      name: "Celestial Spirits",
      views: "1.7k",
      price: "90 XRP",
    },
    {
      id: 2,
      image: art2,
      name: "Moon World: Humans",
      views: "1k",
      price: "777 XRP",
    },
    { id: 3, image: art3, name: "Red Ball", views: "900", price: "3 XRP" },
    { id: 4, image: art4, name: "AI Dude", views: "760", price: "3 XRP" },
    { id: 5, image: art5, name: "Pixel World", views: "500", price: "150 XRP" },
    {
      id: 6,
      image: art6,
      name: "Crazy Professor",
      views: "467",
      price: "200 XRP",
    },
    {
      id: 7,
      image: art7,
      name: "Monster World",
      views: "320",
      price: "87 XRP",
    },
    { id: 8, image: art8, name: "Eye Buddies", views: "250", price: "80 XRP" },
    { id: 9, image: art9, name: "xCubies", views: "211", price: "100 XRP" },
    { id: 10, image: art10, name: "Funk Town", views: "130", price: "130 XRP" },
  ];

  return (
    <>
      {/* Explore Section Start */}
      <div className="explore_section mt-26">
        <div class="section_1">
          <div class="container p-12 mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div  data-aos="zoom-in" data-aos-duration="3000">
              <div class="flex items-center justify-center">
                <img src={header1} class="w-auto" alt="Header 1" />
              </div>
              </div>
              <div class="flex items-center justify-center" data-aos="zoom-in" data-aos-duration="3000">
                <img src={header2} class="w-auto" alt="Header 2" />
              </div>
            </div>
          </div>
        </div>

        <div className="section_2">
          <div className="container mt-12 mb-10 p-2 md:p-2 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5" data-aos="zoom-in" data-aos-duration="2000">
              <div className="text-center">
                <h2 className="text-xl md:text-xl lg:text-2xl font-bold p-3 rounded-2xl shadow-lg shadow-gray-500 w-[250px] md:w-[250px] lg:w-[300px]">
                  Top XRPL Collections
                </h2>
              </div>
              <div className="flex items-center justify-start md:justify-start lg:justify-end">
                <p className="text-[#7A52F4] bg-purple-200 hover:text-white hover:bg-[#7A52F4] px-6 p-2 rounded-full mx-1 font-bold">
                  1 Day
                </p>
                <p className="px-5 p-2 rounded-full mx-1 font-bold border border-gray-300">
                  7 Days
                </p>
                <p className="px-5 p-2 rounded-full mx-1 font-bold border border-gray-300">
                  30 Days
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-3" >
              {collectionData.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-300 rounded-xl flex justify-between items-center p-1" data-aos="zoom-in" data-aos-duration="3000"
                >
                  <div className="flex items-center">
                    <p className="font-bold text-md md:text-lg lg:text-xl px-1">
                      {item.id}
                    </p>
                    <img
                      src={item.image}
                      className="w-auto"
                      alt={`Artwork ${item.id}`}
                    />
                    <p className="text-md md:text-lg lg:text-xl font-semibold px-2">
                      {item.name}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold text-md md:text-lg lg:text-xl px-5">
                      {item.views}
                    </p>
                    <p className="font-bold text-md md:text-lg lg:text-xl px-5">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section_3 bg-gray-900 text-white">
          <div className="container p-5 md:p-5 lg:p-10">
            <h1 className="px-0 md:px-0 lg:px-5 py-0 md:py-0 lg:py-3 text-xl md:text-xl lg:text-2xl font-bold" data-aos="zoom-in" data-aos-duration="3000">
              Recommanded Collections
            </h1>

            <div className="p-5">
              <AppCarousel />
            </div>
          </div>
        </div>

        <div className="section_4">
          <div className="container p-5 md:p-5 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5" data-aos="zoom-in" data-aos-duration="2000">
              <div>
                <h1 className="px-2 md:px-2 lg:px-5 py-2 md:py-2 lg:py-3 text-lg md:text-lg lg:text-2xl font-bold">
                  Active Mints
                </h1>
              </div>
              <div className="flex items-center justify-end md:justify-start lg:justify-end">
                <div className="">
                  <AppBtn label="Explore more" />
                </div>
                <div className="flex items-center justify-center">
                  <div className="border border-gray-300 p-3 rounded-full text-sm md:text-sm lg:text-lg mx-1">
                    <FaArrowLeft />
                  </div>
                  <div className="border-2 border-gray-300 p-3 rounded-full text-sm md:text-sm lg:text-lg  mx-1">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-2" data-aos="zoom-in" data-aos-duration="3000">
              {[
                {
                  img: img13,
                  title: "Celestial Spirits",
                  price: "20 XRP",
                  collectionSize: "2222",
                },
                {
                  img: img10,
                  title: "AI Dude",
                  price: "20 XRP",
                  collectionSize: "10 000",
                },
                {
                  img: img11,
                  title: "Pixel World",
                  price: "100 XRP",
                  collectionSize: "10 000",
                },
                {
                  img: img12,
                  title: "Red Ball",
                  price: "5 XRP",
                  collectionSize: "10 000",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-500 rounded-2xl  p-3"
                >
                  <div className="px-3 my-3">
                    <AppBtn label="Live Now" />
                  </div>
                  <div className="flex justify-center">
                    <img src={item.img} alt={item.title} className="" />
                  </div>
                  <div className="p-3">
                    <h1 className="font-bold text-lg">{item.title}</h1>
                    <p className="text-sm">
                      Price <span className="font-bold">{item.price}</span>
                    </p>
                    <p className="text-sm">
                      Collection Size{" "}
                      <span className="font-bold">{item.collectionSize}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section_5">
          <div className="container p-10">
            <h1 className="px-0 md:px-0 lg:px-5 py-0 md:py-0 lg:py-3 text-xl md:text-xl lg:text-2xl font-bold text-center" data-aos="zoom-in" data-aos-duration="3000">
              Browse All NFT Collections
            </h1>
            <hr className="my-5" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-2" data-aos="zoom-in" data-aos-duration="3000">
              {[
                {
                  img: img14,
                  title: "xCub3es",
                  desc: "by Svyatoslav taushev",
                  price: "100 XRP",
                  collectionSize: "10 000",
                },
                {
                  img: img15,
                  title: "Eye Buddies",
                  desc: "by Angela Longoria",
                  price: "80 XRP",
                  collectionSize: "10 000",
                },
                {
                  img: img16,
                  title: "Monsters World",
                  desc: "by Mathijn Agter",
                  price: "87 XRP",
                  collectionSize: "10 000",
                },
                {
                  img: img17,
                  title: "Crazy Professor",
                  price: "200 XRP",
                  collectionSize: "10 000",
                },
              ].map((item, index) => (
                <div key={index} className="border border-gray-500 rounded-2xl">
                  <div className="w-[100%]">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="px-3 py-3">
                    <h1 className="font-bold text-lg text-center">
                      {item.title}
                    </h1>
                    <p className="text-center text-gray-500">{item.desc}</p>
                    <div className="mt-5 flex justify-between items-center">
                      <p className="text-sm">
                        Floor Price{" "}
                        <span className="font-bold">{item.price}</span>
                      </p>
                      <p className="text-sm">
                        items{" "}
                        <span className="font-bold">{item.collectionSize}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center my-5" data-aos="zoom-in" data-aos-duration="3000">
              <AppBtn label="Load More" />
            </div>
          </div>
        </div>

        <div className="section_6 bg-gray-900 text-white">
          <div className="container p-10">
            <h1 className="px-0 md:px-0 lg:px-5 py-0 md:py-0 lg:py-3 text-xl md:text-xl lg:text-2xl font-bold text-center text-white" data-aos="zoom-in" data-aos-duration="2000">
              Our Services
            </h1>

            <div className="">
              <AppServiceCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
