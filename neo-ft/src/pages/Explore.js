import React from "react";
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
import AppCarousel from "../components/AppCarousel";

function Explore() {
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
        <div className="section_1 ">
          <div className="container p-12 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <img src={header1} className="w-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img src={header2} className="w-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="section_2">
          <div className="container mt-12 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-2 lg:px-10">
              <div className="text-center">
                <h2 className="text-xl md:text-xl lg:text-2xl font-bold p-3 rounded-full shadow-xl w-[250px] md:w-[250px] lg:w-[300px]">
                  Top XRPL Collections
                </h2>
              </div>
              <div className="flex items-center justify-start md:justify-start lg:justify-end">
                <p className="text-[#7A52F4] bg-purple-200 hover:text-white hover:bg-[#7A52F4] px-6 p-2 rounded-full mx-1 font-bold">
                  1 Day
                </p>
                <p className="px-5 p-2 rounded-full mx-1 font-bold border-2 border-gray-300">
                  7 Days
                </p>
                <p className="px-5 p-2 rounded-full mx-1 font-bold border-2 border-gray-300">
                  30 Days
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-2 md:p-2 lg:p-10">
              {collectionData.map((item) => (
                <div
                  key={item.id}
                  className="border-2 border-gray-300 rounded-xl flex justify-between items-center p-1"
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

        <div className="section_3 bg-gray-100">
         <div className="container p-5">
          <h1 className="px-5 py-3 text-3xl font-bold">Recommanded Collections</h1>
           
           <div className="p-5">
           <AppCarousel />
           </div>
         </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
