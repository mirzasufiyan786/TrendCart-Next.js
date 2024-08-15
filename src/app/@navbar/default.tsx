"use client";
import Image from 'next/image';
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { TbReorder } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa";
import { BsGrid1X2 } from "react-icons/bs";
import Link from "next/link";
import LanguageCurrencyDropdown from '@/component/LanguageCurrency';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All Type");
const [activeItem, setActiveItem] = useState('home');
  const [toggle, setToggle] = useState(false)

  const handleItemClick = (item:any) => {

    setActiveItem(item);

    handeltoggle();
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handeltoggle = () => {
    setToggle(!toggle);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <>
    <main className="hidden  w-full h-[86px] md:flex items-center justify-between px-20">
    <Link href="/">
  
    <img src="/logo-colored.jpg" alt="logo" className="h-[46px] w-[150px] cursor-pointer" />
 
</Link>

      <div className="flex ">
        <input
          type="text"
          placeholder="Search"
          className="w-[421px] h-[40px] border-blue border-e-[1px] border-2 rounded-s-lg outline-none ps-4"
        />
        <div className="h-[40px] w-[145px] border-2 border-s-0 border-blue">
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
              <div className="absolute border-[1px] border-gray-600 bg-white w-[145px]"
              
              style={{
                zIndex:'50'
              }}>
                <ul className="list-none text-start ">
                  <li
                    className="cursor-pointer px-3 py-1 hover:text-white hover:bg-blue"
                    onClick={() => handleOptionClick("All Type")}
                  >
                    All Type
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 hover:text-white hover:bg-blue"
                    onClick={() => handleOptionClick("Only Best")}
                  >
                    Only Best
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 hover:text-white hover:bg-blue"
                    onClick={() => handleOptionClick("Special")}
                  >
                    Special
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 hover:text-white hover:bg-blue"
                    onClick={() => handleOptionClick("Latest")}
                  >
                    Latest
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <button className="h-[40px] w-[100px] text-[16px] text-white bg-blue rounded-e-lg ">
          <Link href="/about">
          Serach
          </Link>
        </button>
      </div>
      <div className="flex gap-4 text-[20px] h-[41px] text-[#8B96A5]">
        <div className="mid flex-col space-y-1">
          <span className="cursor-pointer hover:text-gray-800"><IoPerson /></span>
          <p className="text-[12px]">Profile</p>
        </div>
        <div className="relative mid flex-col space-y-1">
        <span className="cursor-pointer hover:text-gray-800">  <MdMessage /></span>
          <p className="text-[12px]">Message</p>
          <span className="-top-4 right-2 absolute size-5 mid text-[14px] rounded-full bg-red text-white">1</span>
        </div>
        <div className="mid flex-col space-y-1">
       <span className="cursor-pointer hover:text-gray-800">   <IoMdHeart /></span>
          <p className="text-[12px]">Orders</p>
        </div>
        <div className=" relative mid flex-col space-y-1">
          <span className="cursor-pointer hover:text-gray-800">
            <Link href="/cart">
            <FaShoppingCart />
            </Link>
          </span>
          <p className="text-[12px]">My cart</p>
          <span className="-top-4 right-0 absolute size-5 mid text-[14px] rounded-full bg-green text-white">3</span>
        </div>
      </div>
    </main>
                    {/* -----------NAVBAR for MOBILES---------- */}
<main className="fixed z-50 md:hidden   w-[100%] bg-white h-[56px] flex items-center justify-between ps-5 pe-10">
  <div className="flex items-center gap-2">
  <span className="text-[24px] " 
  onClick={handeltoggle}
  ><IoIosMenu/></span>
    <Link href="/">
  
    <img src="/logo-colored.jpg" alt="logo" className="h-[36px] w-[116px] cursor-pointer" />
 
</Link>
  </div>
      <div className="  flex gap-4 text-[20px] h-[41px] text-[#8B96A5]">
        <div className="mid  ">
          <span className="cursor-pointer hover:text-gray-800"><IoPerson /></span>  
        </div>
        <div className=" relative mid flex-col space-y-1">
          <span className="cursor-pointer hover:text-gray-800">
            <Link href="/cart">
            <FaShoppingCart />
            </Link>
          </span>
          <span className="top-0 -right-1 absolute size-3 mid text-[10px] rounded-full bg-green text-white">3</span>
        </div>
      </div>
    </main>
   <div className="relative  md:hidden h-[40px]  w-[88%] border-[1px] border-borderColor rounded-lg flex items-center gap-3 px-3 ms-5  text-gray-500 ">
      <IoSearchOutline/>
      <input type="text" name="" id="" placeholder="Search"  className="outline-none h-[35px] w-[280px] "/>
    </div>
    {/* ------------------ */}
  
        {
  toggle && (
    <div className='md:hidden z-50 fixed top-[56px] left-0 h-[95vh] w-[250px] bg-white rounded-e-lg'>
      <div className='bg-gray-200 space-y-2 w-[250px] h-[20%] p-5 rounded-tr-lg'>
        <div>
          <img src="/profile.png" alt="" />
          </div>
          <div className='flex items-center gap-2'>
            <p>Sign in</p>
            <span className='h-[20px] w-[1px] bg-dark'></span>
            <p>Register</p>
          </div>
        </div>
         <div className='p-2 h-[80%] overflow-y-scroll rounded-br-lg'>
        <ul>
          <li
            className={`flex items-center gap-3 p-3 ${activeItem === 'home' ? 'bg-gray-100 font-semibold' : ''}`}
            onClick={() => handleItemClick('home')}
          >
            <span><IoHomeOutline /></span>
            <p><Link href="/">Home</Link></p>
          </li>
          <li
            className={`flex items-center gap-3 p-3 ${activeItem === 'categories' ? 'bg-gray-100 font-semibold' : ''}`}
            onClick={() => handleItemClick('categories')}
          >
            <span><CiBoxList /></span>
            <p><Link href="/electronics/gridrview">Categories</Link></p>
          </li>
          <li
            className={`flex items-center gap-3 p-3 ${activeItem === 'favourites' ? 'bg-gray-100 font-semibold' : ''}`}
            onClick={() => handleItemClick('favourites')}
          >
            <span><CiHeart /></span>
            <p><Link href="/about">Favourite</Link></p>
          </li>
          <li
            className={`flex items-center gap-3 p-3 ${activeItem === 'orders' ? 'bg-gray-100 font-semibold' : ''}`}
            onClick={() => handleItemClick('orders')}
          >
            <span><TbReorder /></span>
            <p><Link href="/cart">My Orders</Link></p>
          </li>
        </ul>
        <hr />
        <ul>
          <li className='flex items-center gap-3 p-3'>
            <LanguageCurrencyDropdown />
          </li>
          <li
            className={`flex items-center gap-3 p-3 ${activeItem === 'contact' ? 'bg-gray-100 font-semibold' : ''}`}
            onClick={() => handleItemClick('contact')}
          >
            <span><FaHeadset /></span>

            <p><Link href="/about">About</Link></p>
          </li>
          <li
            className={`flex items-center gap-3 p-3 ${activeItem === 'about' ? 'bg-gray-100 font-semibold' : ''}`}
            onClick={() => handleItemClick('about')}
          >
            <span><BsGrid1X2 /></span>
            <p>Contact Us</p>
          </li>
        </ul>
        <hr />
        <ul>
          <li
            className={`flex items-center gap-3 p-3 ${activeItem === 'user-agreement' ? 'bg-gray-100 font-semibold' : ''}`}
            onClick={() => handleItemClick('user-agreement')}
          >
            <p>User Agreement</p>
          </li>
          <li
            className={`flex items-center gap-3 p-3 ${activeItem === 'partnership' ? 'bg-gray-100 font-semibold' : ''}`}
            onClick={() => handleItemClick('partnership')}
          >
            <p>Partnership</p>
          </li>
          <li
            className={`flex items-center gap-3 p-3 ${activeItem === 'privacy-policy' ? 'bg-gray-100 font-semibold' : ''}`}
            onClick={() => handleItemClick('privacy-policy')}
          >
            <p>Privacy Policy</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
      
    </>
  );
}
