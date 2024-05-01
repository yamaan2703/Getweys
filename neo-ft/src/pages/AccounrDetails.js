import React from "react";
import profile from "../images/profile.png";
import lauchpad from "../images/lauchpad_detail_bg.png";
import AppBtn from "../components/AppBtn";

function AccounrDetails() {
  return (
    <>
      <div className="accountDetails_section">
        <div className="section_1">
          <div className="container p-5 md:p-5 lg:p-10">
            <div>
              <h1 className="font-bold text-xl md:text-xl lg:text-3xl">
                Account Details
              </h1>
            </div>

            <div className="flex justify-center items-center my-5">
              <div className="border-2 rounded-full shadow-lg shadow-gray-500 mx-3">
                <img src={profile} className="" />
              </div>
              <div className="w-[80%] shadow-lg shadow-gray-500">
                <img src={lauchpad} className="w-[100%]" />
              </div>
            </div>

            <div className="p-5">
              <h1 className="font-bold text-xl md:text-xl lg:text-xl">
                Account Information
              </h1>

              <div className="bg-gray-200 p-5 my-2 rounded-xl">
                <div className="my-3">
                  <p className="text-gray-500 text-sm">Display Name</p>
                  <p className="font-bold text-gray-700 text-lg py-1">
                    TheRealIslander
                  </p>
                  <hr className="h-1 bg-white" />
                </div>
                <div className="my-3">
                  <p className="text-gray-500 text-sm">Discord Username</p>
                  <p className="font-bold text-gray-700 text-lg py-1">
                    TheRealIslander#1232
                  </p>
                  <hr className="h-1 bg-white" />
                </div>
                <div className="my-3">
                  <p className="text-gray-500 text-sm">Twitter / X Username</p>
                  <p className="font-bold text-gray-700 text-lg py-1">
                    @TheRealIslander
                  </p>
                  <hr className="h-1 bg-white" />
                </div>
                <div class="my-3">
                  <p class="text-gray-500 text-sm">Bio Description</p>
                  <textarea class="w-full h-40 my-1 rounded"></textarea>
                </div>
              </div>
              <h1 className="font-bold my-1 text-xl md:text-xl lg:text-xl">
                Contact Details
              </h1>
              <div className="bg-gray-200 p-5 my-2 rounded-xl">
                <div className="my-3">
                  <p className="text-gray-500 text-sm">Display Name</p>
                  <p className="font-bold text-gray-700 text-lg py-1">
                    TheRealIslander
                  </p>
                  <hr className="h-1 bg-white" />
                </div>
                
              </div>

              <div className="flex items-center justify-between">
                <div className="">
                  <AppBtn label="Update Setting"/>
                </div>
                <div className="">
                  <AppBtn label="Cancel"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccounrDetails;
