// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../images/logo.png";
// import { IoMdSearch } from "react-icons/io";
// import AppBtn from "./AppBtn";
// import AppInp from "./AppInp";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
//   const location = useLocation();

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     document.body.style.backgroundColor = isDarkMode ? "black" : "white";
//     document.body.style.color = isDarkMode ? "white" : "black";
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <nav
//       className={`py-4 px-2 fixed top-0 w-full z-10 transition-all shadow-xl bg-white ${
//         isScrolled ? "isScrolled" : ""
//       } ${isDarkMode ? "dark" : ""}`}
//     >
//       <div className="container mx-auto lg:flex lg:justify-between lg:items-center sm:justify-between">
//         <div className="flex items-center">
//           <Link to="/" className="font-bold text-xl">
//             <img src={logo} alt="Logo" />
//           </Link>
//         </div>

//         <div
//           className={`${
//             isOpen ? "block" : "hidden"
//           } lg:flex lg:items-center lg:space-x-2`}
//         >
//           <div className="lg:flex-grow sm:flex-1 flex flex-col lg:flex-row">
//             {[
//               { to: "/", label: "Home" },
//               { to: "/status", label: "Status" },
//               { to: "/service", label: "Service" },
//               { to: "/launchpad", label: "Launchpad" },
//             ].map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.to}
//                 className={`text-[#5D5D5B] p-1 text-md font-semibold mx-1 hover:text-black ${
//                   location.pathname === item.to && "text-black"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>

//         <div>
//           {/* Switch button for light/dark mode */}
//           <label htmlFor="darkModeSwitch" className="flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               id="darkModeSwitch"
//               className="hidden"
//               checked={isDarkMode}
//               onChange={toggleDarkMode}
//             />
//             <div className={`w-10 h-5 bg-gray-300 rounded-full shadow-inner transition duration-300 ease-in-out ${isDarkMode ? "bg-gray-700" : "bg-gray-400"}`}>
//               <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out ${isDarkMode ? "translate-x-5" : ""}`}></div>
//             </div>
//           </label>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import { IoMdSearch } from "react-icons/io";
import AppBtn from "./AppBtn";
import AppInp from "./AppInp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleServiceHover = () => {
    setIsOpen(true);
  };

  const handleServiceLeave = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "black" : "white";
    document.body.style.color = isDarkMode ? "white" : "black";
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={`py-6 px-2 fixed top-0 w-full z-10 transition-all shadow-xl bg-white ${
        isScrolled ? "isScrolled" : ""
      } ${isDarkMode ? "dark" : ""}`}
    >
      <div className="container mx-auto lg:flex lg:justify-between lg:items-center sm:justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-xl">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-2`}
        >
          <div className="lg:flex-grow sm:flex-1 flex flex-col lg:flex-row">
            {[
              { to: "/", label: "Home" },
              { to: "/status", label: "Status" },
              {
                label: "Service",
                dropdownItems: [
                  { to: "/service1", label: "Solution for All" },
                  { to: "/service2", label: "Artwork Creations" },
                  { to: "/service3", label: "Marketing Concept" },
                  { to: "/service4", label: "Video Production" },
                  { to: "/service5", label: "Project Consulting" },
                  { to: "/service6", label: "Collection Launching" },
                  { to: "/service7", label: "Blockchain Solution" },
                ],
              },
              { to: "/launchpad", label: "Launchpad" },
            ].map((item, index) => (
              <div key={index} onMouseEnter={item.dropdownItems ? handleServiceHover : null} onMouseLeave={item.dropdownItems ? handleServiceLeave : null}>
                <Link
                  to={item.to}
                  className={`text-[#5D5D5B] p-1 text-lg font-semibold mx-1 hover:text-black ${
                    location.pathname === item.to && "text-black"
                  }`}
                >
                  {item.label}
                </Link>
                {item.dropdownItems && isOpen && (
                  <div className="absolute bg-white shadow-lg mt-1 rounded-md">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <Link
                        key={dropdownIndex}
                        to={dropdownItem.to}
                        className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Switch button for light/dark mode */}
          <label htmlFor="darkModeSwitch" className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="darkModeSwitch"
              className="hidden"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <div className={`w-10 h-5 bg-gray-300 rounded-full shadow-inner transition duration-300 ease-in-out ${isDarkMode ? "bg-gray-700" : "bg-gray-400"}`}>
              <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out ${isDarkMode ? "translate-x-5" : ""}`}></div>
            </div>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

