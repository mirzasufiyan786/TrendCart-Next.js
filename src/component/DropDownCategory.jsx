"use client";

import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
export default function CategoryDropdown(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      return(
        <>
        <div className="relative cursor-pointer flex items-center gap-2  text-[24px]"    
        onClick={toggleDropdown}
        >
            <IoMenu/>
           <p className="text-[16px]"> All category</p></div>
           {isOpen && (
              <div className="absolute border-[1px] border-gray-600 bg-white  rounded-xl  flex justify-start"
              style={{
                marginTop:"18px",
                padding:"17px",
                width:"500px",
                height:"280px",
                gap:'64px',
                zIndex:'50'
                
              }}
              >
                 <div>
        <div className='flex flex-col gap-2 text-start mx-5'>
          <p>Ads website</p>
          <ul className='flex flex-col gap-2 text-start text-gray-500 '>
            <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Ads home</li> <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Ads listining</li> <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Ads detail</li>
          </ul>
         </div>
         <div className='flex flex-col gap-2 text-start mx-5'>
          <p>Tech Store</p>
          <ul className='flex flex-col gap-2 text-start text-gray-500'>
            <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Main Page</li> <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Listing View</li> <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">item Detail</li>
          </ul>
         </div>
        </div>
        <div className='flex flex-col gap-2 text-start'>
          <p>MarketPlace</p>
          <ul className='flex flex-col gap-2 text-start text-gray-500'><li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Main Page</li> <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Main Page</li> <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Listing View</li> <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">item Detail</li><li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Ads home</li> <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Ads listining</li></ul>
        </div> 
        <div>
        <div className='flex flex-col gap-2 text-start'>
          <p>Food Order</p>
          <ul className='flex flex-col gap-2 text-start text-gray-500'>
            <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Ads home</li> <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Ads listining</li> <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Ads detail</li>
          </ul>
         </div>
         <div className='flex flex-col gap-2 text-start'>
          <p>Common Page</p>
          <ul className='flex flex-col gap-2 text-start text-gray-500'>
            <li className="hover:bg-[#E5F1FF] p-1  hover:rounded-lg  cursor-pointer">Main Page</li> <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">Listing View</li> <li className="hover:bg-[#E5F1FF] p-1 hover:rounded-lg  cursor-pointer">item Detail</li>
          </ul>
         </div>
        </div>
              </div>
             
            )}
        </>
      )
}