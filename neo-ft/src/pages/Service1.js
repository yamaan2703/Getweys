import React from "react";
import help1 from "../images/help1.png";
import help2 from "../images/help2.png";
import help3 from "../images/help3.png";
import help4 from "../images/help4.png";
import help5 from "../images/hep5.png"; // Fixed typo in image import
import help6 from "../images/help6.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function Service1() {
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
      desc: "Optimize operations with our tailored blockchain solutions, ensuring efficiency, security, and integration.",
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

  return (
    <div className="service_section mt-26">
      <div className="section_1">
        <div className="overlay flex justify-center items-center">
          <div className="container p-5 md:p-10">
            <h1 className="text-3xl md:text-6xl font-bold text-white p-3 md:max-w-[700px] text-center md:text-left">
              Excellence in Service Unmatched Quality
            </h1>
          </div>
        </div>
      </div>

      <div className="section_2">
        <div className="container p-10 text-center">
          <h1 className="text-3xl font-bold mb-10">Solutions for All</h1>
          <hr className="my-5" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {slidesData.map((slide) => (
              <div key={slide.id} className="shadow-lg shadow-gray-500 rounded-xl">
                <div className="p-5">
                  <img src={slide.images[0]} alt="Art" className="w-full" />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-gray-400">{slide.desc}</p>
                  <div className="mt-3">
                    <button className="transition duration-300 ease-in-out flex items-center text-md font-semibold rounded-full px-4 py-2    hover:bg-[#7A52F4] hover:text-white">
                      <span className="pr-3 text-xl">
                        <MdKeyboardArrowRight />
                      </span>{" "}
                      See more details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service1;
