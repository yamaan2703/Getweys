import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import logo from "../images/logo.png";
import AppDropdown from "./AppDropdown";

const Navbar = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isWebDevelopmentOpen, setIsWebDevelopmentOpen] = useState(false);
  const [isOffersOpen, setIsOffersOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleServiceDropdown = () => {
    setIsServiceOpen(!isServiceOpen);
    setIsOffersOpen(false);
    setIsPricingOpen(false);
  };

  const toggleWebDevelopmentDropdown = () => {
    setIsWebDevelopmentOpen(!isWebDevelopmentOpen);
  };

  const toggleOffersDropdown = () => {
    setIsOffersOpen(!isOffersOpen);
    setIsServiceOpen(false);
    setIsPricingOpen(false);
  };

  const togglePricingDropdown = () => {
    setIsPricingOpen(!isPricingOpen);
    setIsServiceOpen(false);
    setIsOffersOpen(false);
  };

  const closeDropdowns = () => {
    setIsServiceOpen(false);
    setIsOffersOpen(false);
    setIsPricingOpen(false);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  return (
    <nav
      className={`py-4 fixed top-0 w-full z-10 transition-all shadow-xl ${
        isScrolled ? "bg-white" : "bg-white"
      }`}
    >
      <div className="container mx-auto lg:flex lg:justify-around lg:items-center sm:justify-between">
        <div className="flex justify-between items-center">
          <Link to="/" className="">
            <img className="h-[50px]" src={logo} alt="Logo" />
          </Link>

          <button
            className="lg:hidden text-red-600 focus:outline-none"
            onClick={closeDropdowns}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className={`lg:flex lg:items-center sm:flex-column`}>
          <div className="lg:flex-grow sm:flex-1 flex flex-col lg:flex-row">
            <div className="relative">
              <Link
                to="/"
                className={`text-black p-1 text-xl font-bold mx-3 hover:text-red-600 ${location.pathname === '/' ? 'text-red-600' : ''}`}
                onClick={closeDropdowns}
              >
                Home
              </Link>
            </div>
            <div className="relative" onMouseEnter={toggleServiceDropdown} onMouseLeave={toggleServiceDropdown}>
              <Link
                to="/"
                className={`text-black p-1 text-xl font-bold mx-3 hover:text-red-600 relative`}
              >
                Service <FiChevronDown className="inline-block ml-1" />
              </Link>
              {isServiceOpen && (
                <AppDropdown
                  isOpen={isServiceOpen}
                  onClose={closeDropdowns}
                  services={[
                    {
                      label: "Web Development",
                      subItems: [
                        { to: "/webdevelopment", label: "Web Development" },
                        { to: "/webdesign", label: "Web Design" },
                        { to: "/webmaintenance", label: "Web Maintenance" },
                      ],
                    },
                    { to: "/graphicsdesigning", label: "Graphics Designing" },
                    { to: "/socailmedia", label: "Social Media" },
                    { to: "/digitialmarketing", label: "Digital Marketing" },
                    { to: "/2danimatedvideo", label: "2D Animated Video" },
                    { to: "/2d/3danimatedmodeling", label: "2D/3D Modeling" },
                    { to: "/contentwriting", label: "Content Writing" },
                    { to: "/seo", label: "SEO" },
                    { to: "/advertisement", label: "Advertisement" },
                    { to: "/getscanscanner", label: "Getscan AI Scanner" },
                  ]}
                />
              )}
            </div>
            <div className="relative">
              <Link
                to="/"
                className={`text-black p-1 text-xl font-bold mx-3 hover:text-red-600 relative`}
                onMouseEnter={toggleOffersDropdown}
                onMouseLeave={toggleOffersDropdown}
              >
                Offers <FiChevronDown className="inline-block ml-1" />
              </Link>
              {isOffersOpen && (
                <AppDropdown
                  isOpen={isOffersOpen}
                  onClose={closeDropdowns}
                  offers={[
                    { to: "/momoffers", label: "Mom's Offer" },
                  ]}
                />
              )}
            </div>
            <div className="relative">
              <Link
                to="/"
                className={`text-black p-1 text-xl font-bold mx-3 hover:text-red-600 relative`}
                onMouseEnter={togglePricingDropdown}
                onMouseLeave={togglePricingDropdown}
              >
                Pricing <FiChevronDown className="inline-block ml-1" />
              </Link>
              {isPricingOpen && (
                <AppDropdown
                  isOpen={isPricingOpen}
                  onClose={closeDropdowns}
                  pricing={[
                    { to: "/appdevelopmentpricing", label: "App Development Pricing" },
                    { to: "/webdevelopmentpricing", label: "Web Development Pricing" },
                  ]}
                />
              )}
            </div>
            <div className="relative">
              <Link
                to="/blogs"
                className={`text-black p-1 text-xl font-bold mx-3 hover:text-red-600 ${location.pathname === '/blog' ? 'text-red-600' : ''}`}
                onClick={closeDropdowns}
              >
                Blog
              </Link>
            </div>
            <div className="relative">
              <Link
                to="/contact"
                className={`text-black p-1 text-xl font-bold mx-3 hover:text-red-600 ${location.pathname === '/contact' ? 'text-red-600' : ''}`}
                onClick={closeDropdowns}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div>
            <button className="text-white bg-[#ec193f] px-5 py-3 rounded-3xl font-semibold">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

