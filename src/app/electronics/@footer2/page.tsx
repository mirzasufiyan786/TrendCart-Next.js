"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
export default function Footer2(){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Show 10");
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
    return(
        <>
        <div className=" h-[62px] md:px-20 ps-5 flex items-center gap-2 md:justify-end justify-between" >
        <div className="h-[40px] w-[145px] border-[1px] bg-white text-black rounded-lg border-borderColor">
          <div className="relative inline-block text-center w-[145px]  ">
            <div
              className="flex items-center justify-between mx-3 gap-3 h-[40px] cursor-pointer text-gray-500  "
              onClick={toggleDropdown}
            >
              <button type="button" className="text-[16px] text-dark">
                {selectedOption}
              </button>
              <FaChevronDown />
            </div>

            {isOpen && (
              <div className="absolute border-[1px] rounded-lg border-gray-600 bg-white w-[145px]"
              
              style={{
                zIndex:'50'
              }}>
                <ul className="list-none text-start ">
                  <li
                    className="cursor-pointer px-3 py-1 hover:text-white hover:bg-blue"
                    onClick={() => handleOptionClick("Show 10")}
                  >
                    Show 10
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 hover:text-white hover:bg-blue"
                    onClick={() => handleOptionClick("Show 5")}
                  >
                    Show 5
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 hover:text-white hover:bg-blue"
                    onClick={() => handleOptionClick("Show 08")}
                  >
                   Show 08
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 hover:text-white hover:bg-blue"
                    onClick={() => handleOptionClick("Show 02")}
                  >
                    Show 02
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div>
        <div className="flex items-center justify-center h-[40px] ">
    
      <button
        
        className="px-3 py-1 bg-white h-[40px]  hover:bg-gray-300 focus:outline-none cursor-not-allowed opacity-50 border-[1px] border-borderColor rounded-s-lg "
      >
        &laquo; 
      </button>
      
      
      <button className="px-3 py-1 h-[40px] bg-white border-[1px] border-borderColor  hover:bg-gray-300">
        <Link href="/electronics">1</Link>
      </button>
      <button className="px-3 py-1 h-[40px] bg-white border-[1px] border-borderColor hover:bg-gray-300">
        <Link href="/electronics/page2">2</Link>
      </button>
      <button className="px-3 py-1 h-[40px] bg-white border-[1px] border-borderColor hover:bg-gray-300">3</button>
    
      <button
        
        className="px-3 py-1 bg-white  hover:bg-gray-300 focus:outline-none cursor-not-allowed opacity-50 h-[40px] border-[1px] border-borderColor rounded-e-lg"
      >
        &raquo; 
      </button>
    </div>
        </div>
        </div>
        </>
    )
}