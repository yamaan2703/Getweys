import React from "react";
import launchpad_details_bg from "../images/lauchpad_detail_bg.png";
import img7 from "../images/img7.png";
import AppBtn from "../components/AppBtn";

function LaunchpadDetails() {
  // LaunchpadDetails
  return (
    <>
      <div className="lauchpad_details">
        <div className="section_1">
          <div className="container p-5 md:p-5 lg:p-20 relative">
            <div>
              <img src={launchpad_details_bg} className="w-full" />
            </div>
            <div className="border-2 border-black relative bottom-4">
              <div className="flex justify-between">
                <div className="px-12 bottom-14 relative image-container">
                  <img
                    src={img7}
                    alt="Image"
                    className="w-full border-4 border-white rounded-xl"
                  />
                </div>

                <div className="px-12">
                  <AppBtn label="View Collection" />
                </div>
              </div>

              <div className="relative bottom-40">
                <div className="flex justify-between">
                  <div className="relative left-80">
                    <h1 className="font-bold text-xl md:text-xl lg:text-3xl py-1">
                      Celestial Spirits
                    </h1>
                    <p className="text-[#7A52F4] font-bold">@MoonWorld</p>
                  </div>
                  <div className="relative right-10 flex space-x-4">
                    <p>
                      <span className="font-bold">150 XRP</span> Price
                    </p>
                    <p>
                      Collection Size <span className="font-bold">2222</span>
                    </p>
                  </div>
                </div>

                <div className="m-5 w-[800px] relative left-72 top-6 text-md">
                  <p>
                    Prepare for the launch of the groundbreaking Celestial
                    Spirit Collection, an NFT project poised to revolutionize
                    the XRP Ledger (XRPL) ecosystem.
                  </p>
                </div>

                
                  <div className="bg-purple-500 p-1 rounded-full w-[500px] relative left-80 top-4"></div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LaunchpadDetails;
