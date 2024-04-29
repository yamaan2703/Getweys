import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppBtn from "../components/AppBtn";
import help5 from "../images/hep5.png";
import marketing_1 from "../images/marketing_1.png";
function Service3() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    // Marketing Concept
    <>
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
            <h1
              className="text-xl md:text-xl lg:text-3xl font-bold mb-10"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              Marketing Concept
            </h1>
            <hr className="my-5" />

            <div className="p-0 md:p-0 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="text-start py-5 w-[100%] md:w-[100%] lg:w-[600px]"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-3xl font-bold">
                    Propel Your Venture into the Web3 & NFT Arena with Expert
                    Marketing Assistance{" "}
                  </h1>
                  <p className="py-3">
                    In the vibrant frontier of Web3 and Non-Fungible Tokens
                    (NFTs), making a distinguished entrance is crucial. At Moon
                    Studios, we provide adept marketing strategies tailored to
                    catapult your project into the heart of the NFT community.
                  </p>
                </div>
                <div
                  className="flex justify-center items-center"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <img
                    src={help5}
                    className="w-[100%] md:w-[100%] lg:w-[80%]"
                  />
                </div>
              </div>

              <div
                className="my-12 md:my-6 lg:my-20 flex justify-center items-center"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <h1 className="text-xl md:text-xl lg:text-3xl font-bold  w-[100%] md:w-[100%] lg:w-[40%]">
                  Why is Professional Marketing Assistance Indispensable?{" "}
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Visibility
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    In a space brimming with innovation, gaining visibility is
                    paramount. Our marketing strategies are designed to
                    spotlight your project amidst a discerning audience.
                  </p>
                </div>
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Engagement
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    Engage the community with well-crafted campaigns that
                    resonate. Our expertise in the NFT space ensures your
                    marketing message hits the mark.
                  </p>
                </div>
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Adaptability
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    The Web3 landscape is ever-evolving. Partner with a team
                    that stays ahead of the curve, adapting strategies to the
                    pulse of the market.
                  </p>
                </div>
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Long-Term Growth
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    Foster enduring relationships within the NFT community. Our
                    marketing assistance is a stepping stone towards long-term
                    engagement and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section_3 mt-20 relative">
        <div className="bg-[#7A52F4] p-20"></div>
        <div
          className="container p-10 relative bottom-[170px] md:bottom-[170px] lg:bottom-[270px]"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div className="border p-5 flex justify-center items-center rounded-xl">
            <img src={marketing_1} />
          </div>
        </div>

        <div className="container p-10 relative bottom-[150px] md:bottom-[150px] lg:bottom-[250px]">
          <h1
            className="text-3xl font-bold mb-10 text-center"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            Our Offerings
          </h1>
          <hr className="my-5" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 ">
            <div
              className="shadow-lg rounded-xl p-5 shadow-gray-500 text-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-3">
                Strategic Marketing Plans
              </h1>
              <p className="text-md md:text-md lg:text-lg py-5">
                Customized marketing blueprints to propel your project into the
                limelight.
              </p>
            </div>
            <div
              className="shadow-lg rounded-xl p-5 shadow-gray-500 text-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-3">
                Community Engagement
              </h1>
              <p className="text-md md:text-md lg:text-lg py-5">
                Foster a loyal community with targeted engagement strategies.
              </p>
            </div>
            <div
              className="shadow-lg rounded-xl p-5 shadow-gray-500 text-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-3">
                Promotional Campaigns
              </h1>
              <p className="text-md md:text-md lg:text-lg py-5">
                Creative campaigns that capture attention and drive engagement.
              </p>
            </div>
          </div>

          <div
            className="p-3 my-5 flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <p className="text-gl md:text-lg lg:text-xl text-center w-[100%] md:w-[100%] lg:w-[70%]">
              Embark on a collaborative venture with Moon Studios as your
              seasoned companion in the Web3 and NFT realm. Our marketing mavens
              are geared to amplify your presence and pave a robust pathway for
              your venture in the digital frontier.
            </p>
          </div>

          <div
            className="flex justify-center items-center p-0 md:p-0 lg:p-5"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="font-bold text-lg md:text-lg lg:text-3xl shadow-lg shadow-gray-500 p-2 md:p-2 lg:p-5 rounded-xl w-auto md:w-auto lg:w-[500px]">
              <h1 className="">Get in touch today!</h1>
            </div>
            <div className="w-[200px] md:w-[200px] m-1 md:ml-[1%] lg:ml-[-10%]">
              <AppBtn label="Contact us" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service3;
