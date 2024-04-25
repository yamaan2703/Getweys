import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const AppDropdown = ({ isOpen, onClose, services }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      className={`absolute top-full left-0 mt-2 bg-white shadow-md  w-[200px] border-t-4 border-[#ec193f] ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {services.map((service, index) => (
        <Link
          key={index}
          to={service.to}
          className="block px-4 py-2 text-black font-bold hover:bg-gray-200 hover:text-[#ec193f]"
        >
          {service.label}
        </Link>
      ))}
    </div>
  );
};

export default AppDropdown;


