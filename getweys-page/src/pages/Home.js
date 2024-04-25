import React from "react";
import AppBtn from "../components/AppBtn";
import banner1 from "../images/banner 1.svg";
import banner2 from "../images/banner 2.png";
import AppCard from "../components/AppCard";
import { TbGridDots } from "react-icons/tb";
import { GiVendingMachine } from "react-icons/gi";
import { TbUsersGroup } from "react-icons/tb";
import { MdMobileScreenShare } from "react-icons/md";
import { IoIosCard } from "react-icons/io";
import { SiMaterialdesignicons } from "react-icons/si";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";

import { BsHash } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { RiSeoLine } from "react-icons/ri";
import { IoVolumeHighOutline } from "react-icons/io5";
import AppAccordion from "../components/AppAccordion";
import AppForm from "../components/AppForm";
import AppFooter from "../components/AppFooter";
import AppCarousel from "../components/AppCarousel";

function Home() {
  const accordionItems = [
    {
      title: "How long has Getweys been around?",
      content:
        "Getweys is a well-known Software Development company that was formed in 2020. We are the next generation of company innovation, utilizing technology to deliver cutting-edge business automation, software development, and consulting services",
    },
    {
      title: "What is the cost of developing a website?",
      content:
        "Getweys offers its customers the best development services with many great user experiences considering website design and development in the Pakistan. However, the cost of developing a website depends on the needs of the client.",
    },
    {
      title: "Do you provide website hosting services?",
      content:
        "Getweys has many services to help you grow further in the market, and website hosting is one of them. Getweys software house in the Pakistan offers a variety of hosting services depending on your needs.",
    },
    {
      title: "Do I have to pay for product deployment?",
      content:
        "As you may not know, development takes a tremendous amount of effort to push the product into the international market and get more customers online. Getweys software house helps you achieve this, as they are offering affordable Plans based on your needs.",
    },
    {
      title: "In which regions are your services available?",
      content:
        "Getweys provides competitively priced outsourcing services to the United States Of America and Pakistan, and its nearby areas.",
    },
  ];
  return (
    <>
      <div className="home_page relative top-28">
        <div className="section_1">
          <div className="container p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="py-4 px-4 md:px-4 lg:px-12">
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
                  Software Development Company in Pakistan.
                </h1>
                <p className="text-gray-700 py-4 ">
                  We provide quality-driven, innovative, and cutting-edge
                  solutions to help you flourish in today's ever-changing
                  business. We provide services like website development,
                  graphic designing, digital marketing, and Mobile App
                  development as we are one of the best software development
                  companies in Pakistan that provide these services at an
                  affordable price. Our other services include website designs,
                  API development, SEO, IOS App development, social media
                  marketing, content writing, WordPress error solving, and
                  database designing.
                </p>
                <div className="w-[150px]">
                  <AppBtn label="Let's Discuss" />
                </div>
              </div>
              <div className="p-7">
                <img src={banner1} />
              </div>
            </div>
          </div>
        </div>

        <div className="section_2 mt-12">
          <div className="container p-5">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-[#ec193f] font-bold py-5">
                FREQUENT BUYING SERVICES
              </p>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
                Top Selling Services
              </h1>
              <p className="py-2 text-gray-600 max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl">
                We offer you the best range of mobile application and digital
                marketing services in Pakistan for small and enterprise
                businesses that help in growing your business online.
              </p>
            </div>

            <div className="mt-5 p-7">
              <AppCard />
            </div>
          </div>
        </div>

        <div className="section_3">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="px-7 py-12">
                <img src={banner2} />
              </div>
              <div className="py-4 px-4 md:px-4 lg:px-12">
                <p className="py-4 text-[#ec193f] font-semibold">ABOUT US</p>
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
                  Full Software Development & Marketing Service in Pakistan.
                </h1>
                <p className="text-gray-700 py-4 ">
                  As you know, technology is entering a period of maximum
                  growth. We strive to provide the 'results' and 'returns' of
                  online solutions specifically website design services for your
                  business to the sustainable development of digital marketing
                  services (SEO & SMO). As a result, the Internet and related
                  technologies have flourished dramatically. Therefore, Getweys
                  offers the best solution for your business website needs. We
                  will always help you to reach your goals. Getweys will always
                  keep in mind that customer satisfaction is our first and last
                  mission.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
                  <div className="p-2">
                    <div className="flex items-center">
                      <TbGridDots className="text-4xl text-[#ec193f] font-extrabold" />
                      <p className="text-4xl font-semibold text-[#28235c]">
                        1000+
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-xl py-1">
                        Completed projects
                      </p>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="flex items-center">
                      <GiVendingMachine className="text-4xl text-[#ec193f] font-extrabold" />
                      <p className="text-4xl font-semibold text-[#28235c]">
                        126720
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-xl py-1">
                        Working hours
                      </p>
                    </div>
                  </div>

                  <div className="p-2">
                    <div className="flex items-center">
                      <TbUsersGroup className="text-4xl text-[#ec193f] font-extrabold" />
                      <p className="text-4xl font-semibold text-[#28235c]">
                        7th
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-xl py-1">
                        Top Committers
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[150px]">
                  <AppBtn label="Let's Discuss" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section_4 bg-gray-200 my-5 py-5">
          <div className="container p-5">
            <div className="flex flex-col justify-center items-center text-center pt-10">
              <p className="text-[#ec193f] font-bold py-5">SERVICES</p>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
                Let’s Check Our Services
              </h1>
              <p className="py-2 text-gray-600 max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl">
                At Getweys, we offer you a wide variety of services that can
                solve your problems. We provide you with the services required
                to boost your startup business online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
              <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                <MdMobileScreenShare className="text-6xl text-[#ec193f] bg-white p-3 shadow-xl rounded-full" />
                <p className="text-md py-2 ">Mobile Development</p>
              </div>

              <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                <IoIosCard className="text-6xl text-[#ec193f] p-3 bg-white shadow-xl rounded-full" />
                <p className="text-md py-2 ">Web Development</p>
              </div>

              <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                <SiMaterialdesignicons className="text-6xl text-[#ec193f] p-3 bg-white shadow-xl rounded-full" />
                <p className="text-lg py-2">Graphics Designing</p>
              </div>

              <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                <BiNotepad className="text-6xl text-[#ec193f] p-3 bg-white shadow-xl rounded-full" />
                <p className="text-lg py-2">Content Writing</p>
              </div>

              <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                <MdOutlineShoppingCart className="text-6xl text-[#ec193f] bg-white p-3 shadow-xl rounded-full" />
                <p className="text-lg py-2">Social Media Management</p>
              </div>

              <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                <BsHash className="text-6xl text-[#ec193f] p-3 bg-white shadow-xl rounded-full" />
                <p className="text-lg py-2">Digitial Marketing</p>
              </div>

              <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                <IoVideocamOutline className="text-6xl text-[#ec193f] bg-white p-3 shadow-xl rounded-full" />
                <p className="text-lg py-2">Mobile Development</p>
              </div>

              <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                <PiTelevisionSimpleLight className="text-6xl text-[#ec193f] bg-white p-3 shadow-xl rounded-full" />
                <p className="text-lg py-2">2D/3D Modeling</p>
              </div>

              <div className="flex flex-col justify-center items-center text-center p-3 px-5">
                <RiSeoLine className="text-6xl text-[#ec193f] p-3 bg-white shadow-xl rounded-full" />
                <p className="text-lg py-2">SEO Service</p>
              </div>

              <div className="flex flex-col justify-center items-center text-center p-3 px-5 mb-6">
                <IoVolumeHighOutline className="text-6xl text-[#ec193f] p-3 bg-white shadow-xl rounded-full" />
                <p className="text-lg py-2">Advertisment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section_5">
          <div className="container p-5">
            <div className="flex flex-col justify-center items-center text-center pt-10">
              <p className="text-[#ec193f] font-bold py-5">RECENT PROJECT</p>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
                Our Portfolio
              </h1>
              <p className="py-2 text-gray-600 max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl">
                Over 1000+ Projects completed. More than 950+ Customers
                Satisfied. Getweys uses State-of-the-art Strategies that help
                its customer find better solutions to their problems.
              </p>
              <div class="flex flex-col md:flex-row lg:flex-row justify-center items-center">
                <div class="w-[150px] md:w-[150px] mb-2 md:mb-0 lg:mr-2">
                  <AppBtn label="Development" />
                </div>
                <div class="w-[150px] md:w-[150px] mb-2 md:mb-0 lg:mx-2">
                  <AppBtn label="Design" />
                </div>
                <div class="w-[150px] md:w-[150px]">
                  <AppBtn label="Marketing" />
                </div>
              </div>
            </div>

            <div className="my-10">
              <AppCarousel />
            </div>
          </div>
        </div>

        <div className="section_6 bg-gray-200">
          <div className="container p-5">
            <div className="flex flex-col justify-center items-center text-center pt-10">
              <p className="text-[#ec193f] font-bold py-5">OUR BADGES</p>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
                Getweys Earn Recognitions
              </h1>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
              <div class="w-full md:w-[300px] flex justify-center items-center">
                <img
                  src="https://www.getweys.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FCLUTCH-BADGE.f2b3c7c0.png&w=640&q=75"
                  alt="CLUTCH BADGE"
                />
              </div>
              <div class="w-full md:w-[300px] flex justify-center items-center">
                <img
                  src="https://www.getweys.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fbfirms-certified.0e2bc81f.png&w=3840&q=75"
                  alt="Bfirms Certified"
                />
              </div>
              <div class="w-full md:w-[300px] flex justify-center items-center">
                <img
                  src="https://www.getweys.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBG-BADGE.c5e8557a.png&w=640&q=75"
                  alt="BG BADGE"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section_7">
          <div className="container p-5 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-center  pt-10">
                <p className="text-[#ec193f] font-bold py-5">
                  FREQUENTLY ASKED QUESTIONS
                </p>
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
                  We help you with your Problems
                </h1>
                <p className="py-2 text-gray-600 max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl">
                  Over 1000+ Projects completed. More than 950+ Customers
                  Satisfied. Getweys uses State-of-the-art Strategies that help
                  its customer find better solutions to their problems.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <AppAccordion items={accordionItems} />
              </div>
            </div>
          </div>
        </div>

        <div className="section_8">
          <div className="container p-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-center items-center relative h-auto">
                <div className="border-2 border-gray-500 border-dashed rounded-full p-10 md:p-10 lg:p-20">
                 <div className="border-2 border-gray-500 border-dashed p-2 rounded-full">
                <img src="https://www.getweys.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffeedback-img1.8affc893.webp&w=640&q=75" className="rounded-full"/>  
                 </div>
                
                 <div className="p-1 border-2 border-gray-500 border-dashed rounded-full absolute top-32 right-[-10px] md:right-[-10px] lg:right-20">
                  <img src="https://www.getweys.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffeedback-img3.8aa37c63.webp&w=256&q=75" className="rounded-full w-[60px]"/>
                 </div>
                 <div className="p-1 border-2 border-gray-500 border-dashed rounded-full absolute top-5 left-2 md:left-2 lg:left-32">
                  <img src="https://www.getweys.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffeedback-img2.b788adcc.webp&w=256&q=75" className="rounded-full w-[60px]"/>
                 </div>
                 <div className="p-1 border-2 border-gray-500 border-dashed rounded-full absolute bottom-5 left-2 md:left-2 lg:left-32">
                  <img src="https://www.getweys.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Ffeedback-img4.8fcdbf73.webp&w=256&q=75" className="rounded-full w-[60px]"/>
                 </div>
                 </div>
              </div>
              <div className=" mt-10">
              <p className="text-[#ec193f] font-bold pt-5 pb-1">
              FEEDBACK
                </p>
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
                Reviews from our clients
                </h1>
                <div className="flex m-5">
                  <div className="pr-1 md:pr-1 lg:pr-7 w-[240px]">
                    <AppBtn label="View More Reviews"/>
                  </div>
                  <div className="pl-1 md:pl-1 lg:pl-7 w-[240px]">
                    <AppBtn label="Add Your Reviews"/>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className="section_9">
          <div className="container p-5">
            <div className="flex flex-col justify-center items-center text-center pt-10">
              <p className="text-[#ec193f] font-bold py-5">GET IN TOUCH</p>
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-gray-800 py-2">
                Get a Quote
              </h1>
            </div>
            <div className="">
              <AppForm />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
