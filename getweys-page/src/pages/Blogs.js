import React from "react";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/bog3.jpg";

function Blogs() {
  return (
    <div className="blog_section relative top-28">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-[#ec193f] font-bold py-5">HAVE A LOOK ON</p>
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
          Our Latest Blogs
        </h1>
      </div>

      <div className="container p-5 my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative hover:opacity-90">
            <img src={blog1} className="w-full h-auto" alt="Blog 1" />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex flex-col justify-end text-white p-2">
              <h1 className="text-xl md:text-xl lg:text-4xl font-semibold text-gray-100 py-2">
                Custom Software Development Company In Florida
              </h1>
              <p>
                At Getweys, We Offer Quality-driven, Creative, And Innovative
                Solutions To Support Your Success In The Dynamic...
              </p>
              <p>25 April 2024</p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative hover:opacity-90">
                <img src={blog2} className="w-full h-auto" alt="Blog 1" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-end text-white p-2">
                  <h1 className="text-xl md:text-xl lg:text-xl font-semibold text-gray-100 py-2">
                    Why Mobile Web Application Development Is Important For
                    Business
                  </h1>
                  <p className="text-sm">25 April 2024</p>
                </div>
              </div>
              <div className="relative hover:opacity-90">
                <img src={blog3} className="w-full h-auto" alt="Blog 1" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-end text-white p-2">
                  <h1 className="text-xl md:text-xl lg:text-xl font-semibold text-gray-100 py-2">
                    What You Must Know About Developing Hybrid Mobile Apps
                  </h1>
                  <p className="text-sm">25 April 2024</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative hover:opacity-90 mt-1">
                <img src={blog2} className="w-full h-auto" alt="Blog 1" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-end text-white p-2">
                  <h1 className="text-xl md:text-xl lg:text-xl font-semibold text-gray-100 py-2">
                    Wordpress Development For Enterprise Use
                  </h1>
                  <p className="text-sm">25 April 2024</p>
                </div>
              </div>
              <div className="relative hover:opacity-90 mt-1">
                <img src={blog1} className="w-full h-auto" alt="Blog 1" />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-end text-white p-2">
                  <h1 className="text-xl md:text-xl lg:text-xl font-semibold text-gray-100 py-2">
                    Web Design For Small Businesses
                  </h1>
                  <p className="text-sm">25 April 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-5 my-5 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-gray-100 rounded p-3 my-2 hover:shadow-xl shadow-black hover:mb-5 transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
            <div>
              <img
                src="https://www.getweys.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F253682%2F802x500%2F0437b2eed7%2Fincrease-online-visibility.jpg&w=2048&q=75"
                class="rounded"
              />
            </div>
            <p class="text-xl text-black font-semibold my-2 hover:text-[#ec193f]">
              Increase Online Visibility For Digital Development Of Your Product
            </p>
          </div>

          <div class="bg-gray-100 rounded p-3 hover:shadow-xl shadow-black my-2 hover:mb-5 transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
            <div>
              <img
                src="https://www.getweys.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F253682%2F802x500%2F5518e300d9%2Fdigital-marketing-vs-traditional-marketing.jpg&w=2048&q=75"
                class="rounded"
              />
            </div>
            <p class="text-xl text-black font-semibold my-2 hover:text-[#ec193f]">
              The Distinctions Between Digital And Traditional Marketing
            </p>
          </div>

          <div class="bg-gray-100 rounded p-3 hover:shadow-xl shadow-black my-2 hover:mb-5 transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
            <div>
              <img
                src="https://www.getweys.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F253682%2F802x500%2F1fbbdf8617%2Fwhat-is-ai-and-how-does-it-work.jpg&w=2048&q=75"
                class="rounded"
              />
            </div>
            <p class="text-xl text-black font-semibold my-2 hover:text-[#ec193f]">
              What Is Ai And How Does It Work?
            </p>
          </div>

          <div class="bg-gray-100 rounded p-3 hover:shadow-xl shadow-black my-2 hover:mb-5 transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
            <div>
              <img
                src="https://www.getweys.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F253682%2F802x500%2F1f00f6a3dc%2Fhigh-ticket-digital-marketing.jpg&w=2048&q=75"
                class="rounded"
              />
            </div>
            <p class="text-xl text-black font-semibold my-2 hover:text-[#ec193f]">
              What Is High-ticket Digital Marketing?
            </p>
          </div>

          <div class="bg-gray-100 rounded p-3 my-2 hover:shadow-xl shadow-black hover:mb-5 transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
            <div>
              <img
                src="https://www.getweys.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F253682%2F1000x700%2F34d0bddac3%2Fgetweys-blog-which-social-media-platform-pays-the-most-2023-1.jpg&w=2048&q=75"
                class="rounded"
              />
            </div>
            <p class="text-xl text-black font-semibold hover:text-[#ec193f] my-2">
              Social Media Platform Pays The Most
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
