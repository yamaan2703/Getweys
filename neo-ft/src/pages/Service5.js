import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppBtn from "../components/AppBtn";
import help1 from "../images/help1.png";
import project_1 from "../images/project_1.png"

function Service5() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    // Project Consulting
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
            Project Consulting
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
                Navigate the Web3 & NFT Landscape with Expert Consulting{" "}
                </h1>
                <p className="py-3">
                The frontier of Web3 and Non-Fungible Tokens (NFTs) is bustling with opportunities yet laden with complexities. At Moon Studios, we offer seasoned consulting services to guide your venture through the intricacies of the NFT realm and Web3 technology.
                </p>
              </div>
              <div
                className="flex justify-center items-center"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <img
                  src={help1}
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
              Why is Professional Consulting a Game-Changer?
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="shadow-lg rounded-xl p-5 shadow-gray-500"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                Informed Decisions
                </h1>
                <p className="text-md md:text-md lg:text-lg py-5">
                The Web3 domain is intricate. Our consulting services empower you with the knowledge to make informed decisions, propelling your venture to success.
                </p>
              </div>
              <div
                className="shadow-lg rounded-xl p-5 shadow-gray-500"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                Strategic Planning
                </h1>
                <p className="text-md md:text-md lg:text-lg py-5">
                Tailored roadmaps for navigating the technical, legal, and operational aspects of your NFT project, ensuring a smooth transition into the Web3 ecosystem.
                </p>
              </div>
              <div
                className="shadow-lg rounded-xl p-5 shadow-gray-500"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                Risk Management
                </h1>
                <p className="text-md md:text-md lg:text-lg py-5">
                Identify, assess, and mitigate risks with a seasoned partner who understands the ever-evolving landscape of NFTs and Web3 technology.
                </p>
              </div>
              <div
                className="shadow-lg rounded-xl p-5 shadow-gray-500"
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                Long-term Vision
                </h1>
                <p className="text-md md:text-md lg:text-lg py-5">
                Establish a solid foundation for your project with a long-term vision that aligns with the dynamic growth trajectories of the Web3 and NFT space.
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
          <img src={project_1} />
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
            Custom Consulting Solutions
            </h1>
            <p className="text-md md:text-md lg:text-lg py-5">
            Personalized consulting solutions addressing the unique challenges and opportunities of your project.
            </p>
          </div>
          <div
            className="shadow-lg rounded-xl p-5 shadow-gray-500 text-center"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-3">
            Technical Guidance
            </h1>
            <p className="text-md md:text-md lg:text-lg py-5">
            Navigate the technical intricacies of blockchain technology and NFT platforms with expert guidance.
            </p>
          </div>
          <div
            className="shadow-lg rounded-xl p-5 shadow-gray-500 text-center"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-3">
            Operational Strategy
            </h1>
            <p className="text-md md:text-md lg:text-lg py-5">
            Streamlined operational strategies for efficient project management and execution in the NFT domain.
            </p>
          </div>
        </div>

        <div
          className="p-3 my-5 flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <p className="text-gl md:text-lg lg:text-xl text-center w-[100%] md:w-[100%] lg:w-[70%]">
          Embark on a collaborative endeavor with Moon Studios as your trusted consulting ally in the Web3 and NFT sphere. Our seasoned consultants are equipped to transform the complex into the comprehensible, paving a clear path for your venture in the digital realm.
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
  )
}

export default Service5