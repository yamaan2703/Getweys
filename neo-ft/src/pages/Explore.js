import React from "react";
import header1 from "../images/header1.png";
import header2 from "../images/header2.png";

function Explore() {
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
        <div className="container border-2 border-black mt-12">
          <div className="flex justify-between items-center p-5">
            <div>
              <h2 className="text-2xl font-bold px-6 py-3 rounded-full shadow-xl">Top XRPL Collections</h2>
            </div>
            <div className="flex">
              <p className="text-[#7A52F4] bg-purple-200 hover:text-white hover:bg-[#7A52F4] px-7 p-2 rounded-full mx-1 font-bold">1 Day</p>
              <p className="px-6 p-2 rounded-full mx-1 font-bold border-2 border-gray-300">7 Days</p>
              <p className="px-6 p-2 rounded-full mx-1 font-bold border-2 border-gray-300">30 Days</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="border-2 border-gray-300 flex">
                 
              </div>
            </div>
          </div>
        </div>
       </div>


      


      </div>
    </>
  );
}

export default Explore;
