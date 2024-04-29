import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppBtn from "../components/AppBtn";
import help3 from "../images/help3.png";
import blockchain_1 from "../images/blockchain_1.png";

function Service7() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    // Blockchain Solutions

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
              className="text-3xl md:text-xl lg:text-3xl font-bold mb-10"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              Blockchain Solutions
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
                    Harness the Potential of Web3 with Our Comprehensive
                    Development Solutions
                  </h1>
                  <p className="py-3">
                    The ascension into the Web3 and Non-Fungible Tokens (NFTs)
                    domain demands a solid technical foundation. At [Your
                    Company's Name], we offer a spectrum of development
                    solutions to ensure your venture is technologically adept
                    and poised for success in the digital realm.
                  </p>
                </div>
                <div
                  className="flex justify-center items-center"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <img
                    src={help3}
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
                  Why are Robust Web3 Development Solutions Vital?
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Technical Expertise
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    A grand launch on a dedicated marketplace offers
                    unparalleled visibility among a discerning audience, setting
                    the stage for your project’s success.
                  </p>
                </div>
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Customization
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    Tailored solutions aligned with your objectives. From
                    front-end to back-end development, we ensure a seamless user
                    experience and operational efficiency.
                  </p>
                </div>
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Integration
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    Effective integration of blockchain technology, ensuring
                    secure transactions and trust with your audience.
                  </p>
                </div>
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Community Engagement
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    Engage your community with interactive platforms. Our
                    Discord bot development enhances community interaction,
                    fostering a vibrant ecosystem.
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
            <img src={blockchain_1} />
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
                Customized Launch Strategies
              </h1>
              <p className="text-md md:text-md lg:text-lg py-5">
                Tailored launch plans to spotlight your NFT collection, ensuring
                a successful debut.
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
                Engage with a thriving community of NFT aficionados right from
                the launch of your collection.
              </p>
            </div>
            <div
              className="shadow-lg rounded-xl p-5 shadow-gray-500 text-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-3">
                Secure Transactions
              </h1>
              <p className="text-md md:text-md lg:text-lg py-5">
                A secure and transparent platform for transactions, building a
                foundation of trust with your buyers.
              </p>
            </div>
          </div>

          <div
            className="p-3 my-5 flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <p className="text-gl md:text-lg lg:text-xl text-center w-[100%] md:w-[100%] lg:w-[70%]">
              Embark on an exciting venture with Moon Studios as your ally for a
              remarkable entry into the Web3 and NFT sphere. Our dedicated
              marketplace and seasoned team are geared to ensure a triumphant
              launch and sustained growth of your NFT collection.
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

export default Service7;
