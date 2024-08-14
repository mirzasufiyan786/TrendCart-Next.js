"use client"
// components/Dropdown.js
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        className="flex justify-between items-center w-full  text-left bg-gray-100 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        <FiChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-2 bg-gray-100 rounded-lg shadow-lg ">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
