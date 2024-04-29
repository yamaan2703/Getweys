import React, { useEffect } from "react";
import launchpad_bg from "../images/lunchpad_bg.png";
import AppBtn from "../components/AppBtn";
import img10 from "../images/img10.png";
import img11 from "../images/img11.png";
import img12 from "../images/img12.png";
import img13 from "../images/img13.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Launchpad() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    // Lauchpad
    <>
      <div className="launchpad_section mt-26">
  <div className="section_1 mt-20 flex flex-col items-center">
    <div className="container p-10 relative">
      <div>
        <img
          src={launchpad_bg}
          alt="Launchpad Background"
          className="w-full"
        />
      </div>
      <div className="text-white p-3 relative bottom-[100px] md:bottom-[100px] lg:bottom-[300px] text-center">
        <div className="py-2">
          <AppBtn label="Live Now" />
        </div>
        <h1 className="text-md md:text-md lg:text-5xl font-bold py-2">
          Moon World: Celestial Spirits
        </h1>
        <p className="text-sm md:text-sm lg:text-2xl font-bold py-2">
          Ends in: 18h 54m 29s
        </p>
        <div className="py-2">
          <AppBtn label="View More Details" />
        </div>
      </div>
    </div>
  </div>

  <div className="section_4">
    <div className="container p-5 md:p-5 lg:p-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5" data-aos="zoom-in" data-aos-duration="2000">
        <div>
          <h1 className="px-2 md:px-2 lg:px-5 py-2 md:py-2 lg:py-3 text-lg md:text-lg lg:text-2xl font-bold">
            Active Mints
          </h1>
        </div>
        <div className="flex items-center justify-end md:justify-start lg:justify-end">
          <div>
            <AppBtn label="Explore more" />
          </div>
          <div className="flex items-center justify-center">
            <div className="border border-gray-300 p-3 rounded-full text-sm md:text-sm lg:text-lg mx-1">
              <FaArrowLeft />
            </div>
            <div className="border-2 border-gray-300 p-3 rounded-full text-sm md:text-sm lg:text-lg mx-1">
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
          <div key={index} className="border-2 border-gray-500 rounded-2xl p-3">
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
</div>

    </>
  );
}

export default Launchpad;
