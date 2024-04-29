import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppBtn from "../components/AppBtn";
import help6 from "../images/help6.png";
import video_production_1 from "../images/video_production_1.png";
import video_production_2 from "../images/video_production_2.png";
import video_production_3 from "../images/video_production_3.png";

function Service4() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    // Video Production
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
              Video Production
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
                    Illuminate Your Web3 & NFT Venture with Captivating Animated
                    Videos{" "}
                  </h1>
                  <p className="py-3">
                    The digital realm of Web3 and Non-Fungible Tokens (NFTs)
                    thrives on visual engagement. At Moon Studios, we specialize
                    in crafting animated videos that not only tell your story
                    but also resonate with the ethos of the NFT community.
                  </p>
                </div>
                <div
                  className="flex justify-center items-center"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <img
                    src={help6}
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
                  Why is Quality Video Production Essential?
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Engagement
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    Animated videos are a potent tool to captivate and engage
                    your target audience. Our creations are tailored to spark
                    curiosity and foster engagement.
                  </p>
                </div>
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Communication
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    Convey your project’s vision, values, and offerings in a
                    visually compelling manner. A well-crafted video can
                    communicate complex ideas in an easy format.
                  </p>
                </div>
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Brand Identity
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    Establish a distinctive brand identity in the crowded NFT
                    marketplace. Quality video production sets you apart and
                    creates a lasting impression.
                  </p>
                </div>
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Educational Value{" "}
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    Educate your audience about the nuances of Web3 and NFTs
                    through engaging and informative animated videos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section_3 mt-20 relative">
        <div className="bg-[#7A52F4] p-20"></div>
        <div className="container p-10 relative bottom-[280px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="border py-10 rounded-xl flex justify-center items-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={video_production_1} alt="Artwork 1" />
            </div>
            <div
              className="border py-10 rounded-xl flex justify-center items-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={video_production_2} alt="Artwork 2" />
            </div>
            <div
              className="border py-10 rounded-xl flex justify-center items-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={video_production_3} alt="Artwork 3" />
            </div>
          </div>
        </div>

        <div className="container p-10 relative bottom-[250px]">
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
                Custom Animated Videos
              </h1>
              <p className="text-md md:text-md lg:text-lg py-5">
                Tailored animations that encapsulate your project’s essence and
                resonate with your target audience.
              </p>
            </div>
            <div
              className="shadow-lg rounded-xl p-5 shadow-gray-500 text-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-3">
                Storyboarding
              </h1>
              <p className="text-md md:text-md lg:text-lg py-5">
                Crafting compelling narratives that convey your message
                effectively.
              </p>
            </div>
            <div
              className="shadow-lg rounded-xl p-5 shadow-gray-500 text-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-3">
                Marketing Video Production{" "}
              </h1>
              <p className="text-md md:text-md lg:text-lg py-5">
                Promotional videos that spotlight your project and enhance its
                visibility in the NFT community.
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

export default Service4;
