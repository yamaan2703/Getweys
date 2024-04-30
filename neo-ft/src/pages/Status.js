import React from "react";
import AppBtn from "../components/AppBtn";
import { SiHiveBlockchain } from "react-icons/si";
import { TbCategory } from "react-icons/tb";
import AppTable from "../components/AppTable";

function Status() {
  return (
    // Status Page
    <>
      <div className="status_section mt-20">
        <div className="section_1">
          <div className="container p-2 md:p-4 lg:p-10">
            <div>
              <h1 className="font-bold text-xl md:text-xl lg:text-4xl">
                Top Selling NFTs
              </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center my-5">
              <div className="flex flex-wrap md:flex-nowrap items-center">
                <div className="border-2 py-2 px-6 rounded-full mx-1 my-1 md:my-0 md:mx-2 hover:bg-[#7A52F4] hover:text-white hover:border-[#7A52F4]">
                  <button className="flex items-center space-x-2">
                    <SiHiveBlockchain />
                    <span className="">Blockchain</span>
                  </button>
                </div>
                <div className="border-2 py-2 px-6 rounded-full mx-1 my-1 md:my-0 md:mx-2 hover:bg-[#7A52F4] hover:text-white hover:border-[#7A52F4]">
                  <button className="flex items-center space-x-2">
                    <TbCategory />
                    <span className="">Category</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <div className="md:mr-2">
                  <AppBtn label="1 Day" />
                </div>
                <div className="border-2 py-2 px-6 rounded-full mx-1 my-1 md:my-0 hover:bg-[#7A52F4] hover:text-white hover:border-[#7A52F4]">
                  <button className="">7 Days</button>
                </div>
                <div className="border-2 py-2 px-6 rounded-full mx-1 my-1 md:my-0 hover:bg-[#7A52F4] hover:text-white hover:border-[#7A52F4]">
                  <button className="">30 Days</button>
                </div>
                <div className="border-2 py-2 px-6 rounded-full mx-1 my-1 md:my-0 hover:bg-[#7A52F4] hover:text-white hover:border-[#7A52F4]">
                  <button className="">All Time</button>
                </div>
              </div>
            </div>

            <div>
              <AppTable />
            </div>

            <div className="my-5 text-center">
              <AppBtn label="Load More"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;
