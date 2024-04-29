import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppBtn from "../components/AppBtn";
import help4 from "../images/help4.png";
import artwork_creation_1 from "../images/artwork_creation_1.png";
import artwork_creation_2 from "../images/artwork_creation_2.png";
import artwork_creation_3 from "../images/artwork_creation_3.png";
import artwork_creation_4 from "../images/artwork_creation_4.png";

function Service2() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    // ArtWork Creation
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
              Artwork Creation{" "}
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
                    Elevate Your NFT Project with Exceptional Digital Artwork
                  </h1>
                  <p className="py-3">
                    In the burgeoning realm of Non-Fungible Tokens (NFTs), the
                    essence of uniqueness and artistic prowess is paramount. At
                    Moon Studios, we epitomize the fusion of artistry and
                    blockchain technology by offering sterling digital artwork
                    tailored for your NFT projects.
                  </p>
                </div>
                <div
                  className="flex justify-center items-center"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <img
                    src={help4}
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
                  Why is Having a Skilled Artist and a Reliable Partner Crucial?
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Uniqueness
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    A skilled artist not only crafts unique digital assets but
                    also instills an indelible identity in your NFT project.
                    Stand apart in a crowded marketplace with artwork that
                    resonates.
                  </p>
                </div>
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Quality
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    High-caliber artwork is a hallmark of a reputable NFT
                    project. Our seasoned artists ensure every pixel tells a
                    story, enhancing the overall value and appeal of your
                    tokens.
                  </p>
                </div>
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Professionalism
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    Partner with a team that understands the intricacies of the
                    NFT landscape. We adhere to deadlines, maintain open
                    communication, and are committed to propelling your project
                    to new heights.
                  </p>
                </div>
                <div
                  className="shadow-lg rounded-xl p-5 shadow-gray-500"
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-5">
                    Long-Term Relationship
                  </h1>
                  <p className="text-md md:text-md lg:text-lg py-5">
                    A reliable partner is invaluable in navigating the evolving
                    NFT space. Grow together with a team that values
                    collaboration and is invested in your success.
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div
              className="border py-10 rounded-xl flex justify-center items-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={artwork_creation_1} alt="Artwork 1" />
            </div>
            <div
              className="border py-10 rounded-xl flex justify-center items-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={artwork_creation_2} alt="Artwork 2" />
            </div>
            <div
              className="border py-10 rounded-xl flex justify-center items-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={artwork_creation_3} alt="Artwork 3" />
            </div>
            <div
              className="border py-10 rounded-xl flex justify-center items-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <img src={artwork_creation_4} alt="Artwork 4" />
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
                Custom Digital Artwork
              </h1>
              <p className="text-md md:text-md lg:text-lg py-5">
                Tailored digital assets that encapsulate your project's ethos
                and appeal to your target audience.
              </p>
            </div>
            <div
              className="shadow-lg rounded-xl p-5 shadow-gray-500 text-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-3">
                NFT Project Consultation
              </h1>
              <p className="text-md md:text-md lg:text-lg py-5">
                Leverage our expertise to navigate the technical and creative
                aspects of your NFT project.
              </p>
            </div>
            <div
              className="shadow-lg rounded-xl p-5 shadow-gray-500 text-center"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <h1 className="text-xl md:text-xl lg:text-2xl font-bold py-3">
                Marketing and Promotion
              </h1>
              <p className="text-md md:text-md lg:text-lg py-5">
                Amplify your project’s visibility with our comprehensive
                marketing and promotional strategies.
              </p>
            </div>
          </div>

          <div
            className="p-3 my-5 flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <p className="text-gl md:text-lg lg:text-xl text-center w-[100%] md:w-[100%] lg:w-[70%]">
              Embark on a collaborative journey with Moon Studios as your
              trusted ally in the NFT domain. Our adept artists and seasoned
              professionals are poised to transform your vision into a
              captivating digital reality.
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

export default Service2;
