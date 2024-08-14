"use client";
import Link from "next/link";
import Image from 'next/image';
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { FaLock,FaMessage,FaTruck, } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
const list = [
  {
    pic: "/recom (1).jpg",
    name: "T-shirts with multiple colors, for men and lady",
    p: "Size: medium, color: blue, material: cotton",
    p2: "Seller: Artel Market",
    price: "$78.99",
  },
  {
    pic: "/recom (2).jpg",
    name: "Casual Men's Sneakers, available in various sizes",
    p: "Size: 10, color: white, material: leather",
    p2: "Seller: Best LLC",
    price: "$120.50",
  },
  {
    pic: "/recom (3).jpg",
    name: "Ladies Handbag with multiple compartments",
    p: "Size: large, color: black, material: faux leather",
    p2: "Seller: Artel Market",
    price: "$89.75",
  },
];
const list2 = [
    {
        pic: "detail pic (4).jpg",
        name: "Polo Shirt",
        name2: "Casual Contrast",
        price: "$15.00 - $45.00"
    },
    {
        pic: "detail pic (2).jpg",
        name: "Polo Short",
        name2: "Classic Blue",
        price: "$20.00 - $50.00"
    },
    {
        pic: "detail pic (3).jpg",
        name: "Gray Coat",
        name2: "Winter Collection",
        price: "$80.00 - $150.00"
    },
    {
        pic: "detail pic (5).jpg",
        name: "Blue Bag",
        name2: "Leather Luxury",
        price: "$25.00 - $60.00"
    }
  ];
export default function Cart() {
  const [isOpen, setIsOpen] = useState(Array(list.length).fill(false));
  const [selectedOptions, setSelectedOptions] = useState(
    Array(list.length).fill("Qty: 1")
  );

  const toggleDropdown = (index: Number) => {
    setIsOpen((prev) => prev.map((open, i) => (i === index ? !open : open)));
  };

  const handleOptionClick = (index: number | Number, option: string) => {
    setSelectedOptions((prev) =>
      prev.map((selected, i) => (i === index ? option : selected))
    );
    toggleDropdown(index); // Close the dropdown after selecting an option
  };

  return (
    <div className="space-y-3 md:block flex flex-col md:justify-center justify-center">
      <h1 className="text-[24px] font-semibold md:mx-20  mx-5 mt-6">My cart (3)</h1>
      <div className="space-y-5">
        <div className="bg-gray-100 md:h-[620px] h-[1210px] md:w-[1180px] 
         w-[100%] md:mx-20 md:flex gap-4">
          <div className="bg-white md:h-[592px]  md:w-[880px] w-[100%] md:p-4 pt-4   border-[1px] border-borderColor bor rounded-lg flex flex-col items-center space-y-2 md:space-y-0">
            <div>
              {list.map((item, index) => (
                <div
                  className=" md:h-[156px]  md:w-[840px] w-[100%]  flex items-start justify-between md:p-4 md:border-b-[1px] md:border-l-0 md:border-r-0 md:border-t-0  border-[1px] border-borderColor rounded-ld md:rounded-none p-4  "
                  key={index}
                >
                  <div className="flex gap-2 ">
                    <div>
                      <img src={item.pic} alt="" className="size-[80px]" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-500">{item.p}</p>
                      <p className="text-gray-500">{item.p2}</p>
                      <div className="flex items-center gap-2">
                        <div className="w-[70px] h-[30px] rounded-lg border-[1px] border-borderColor text-red text-[10px] mid">
                          Remove
                        </div>
                        <div className="w-[103px] h-[30px] mid rounded-lg border-[1px] border-borderColor text-blue text-[10px] mid ">
                          Save for later
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col gap-3 items-end">
                    <p>{item.price}</p>
                    {/* Dropdown */}
                    <div className="h-[40px] w-[145px] rounded-lg border-[1px] border-borderColor bg-white">
                      <div className="relative inline-block text-center w-[145px]">
                        <div
                          className="flex items-center justify-between mx-3 gap-3 h-[40px] cursor-pointer text-gray-500"
                          onClick={() => toggleDropdown(index)}
                        >
                          <button
                            type="button"
                            className="text-[16px] text-dark"
                          >
                            {selectedOptions[index]}
                          </button>
                          <FaChevronDown />
                        </div>

                        {isOpen[index] && (
                          <div
                            className="absolute border-[1px] border-gray-600 bg-white w-[145px]"
                            style={{ zIndex: "50" }}
                          >
                            <ul className="list-none text-start">
                              <li
                                className="cursor-pointer px-3 py-1 hover:text-white hover:bg-blue"
                                onClick={() =>
                                  handleOptionClick(index, "Qty: 1")
                                }
                              >
                                Qty: 1
                              </li>
                              <li
                                className="cursor-pointer px-3 py-1 hover:text-white hover:bg-blue"
                                onClick={() =>
                                  handleOptionClick(index, "Qty: 2")
                                }
                              >
                                Qty: 2
                              </li>
                              <li
                                className="cursor-pointer px-3 py-1 hover:text-white hover:bg-blue"
                                onClick={() =>
                                  handleOptionClick(index, "Qty: 4")
                                }
                              >
                                Qty: 4
                              </li>
                              <li
                                className="cursor-pointer px-3 py-1 hover:text-white hover:bg-blue"
                                onClick={() =>
                                  handleOptionClick(index, "Qty: 6")
                                }
                              >
                                Qty: 6
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* End of Dropdown */}
                  </div>
                </div>
              ))}
            </div>
            <div className=" md:w-[850px] w-[350px] h-[120px] px-5 md:px-0 flex items-center justify-between">
<div className="w-[159px] bg-blue text-white rounded-lg  h-[40px] mid">
    <Link href="/electronics" className="flex items-center gap-3"><span className="text-[20px]"><GoArrowLeft/></span>
    Back to shop</Link>
    </div>
    <div className="w-[115px] bg-white text-blue border-[1px] border-borderColor rounded-lg flex items-center gap-3 h-[40px] cursor-pointer mid">Remove all</div>
            </div>
          </div>
          <div className="space-y-3 ">
            <div className="bg-white md:w-[280px] w-[90%] ms-3 md:ms-0 mt-4 md:mt-0 h-[110px]  border-[1px] border-borderColor rounded-lg p-4 space-y-3">
              <p>Have a coupon?</p>
              <div className="w-[247px] h-[40px]  border-[1px] border-borderColor rounded-lg flex items-center">
                <div className="w-[164px] h-full roun-s-lg border-e-[1px] border-borderColor p-2">
                  Add a coupon
                </div>
                <div className="text-blue h-full w-[85px] rou-e-lg p-2">
                  Apply
                </div>
              </div>
            </div>
            <div className="bg-white md:w-[280px] w-[90%] ms-3 md:ms-0 mt-4 md:mt-0 h-[325px] rounded-lg p-4 space-y-2 border-[1px] border-borderColor">
              <div>
                <p className="w-[250px] h-[40px] flex justify-between text-gray-500">
                  <span className="w-[100px] px-2">Subtotal:</span>
                  <span className="text-dark w-[150px] px-2">$1403.97</span>
                </p>
                <p className="w-[250px] h-[40px] flex justify-between text-gray-500">
                  <span className="w-[100px] px-2">Discount:</span>
                  <span className="text-red w-[150px] px-2">-$60.00</span>
                </p>
                <p className="w-[250px] h-[40px] flex justify-between text-gray-500">
                  <span className="w-[100px] px-2">Tax:</span>
                  <span className="text-green w-[150px] px-2">+$14.00</span>
                </p>
              </div>
              <hr />
              <div>
                <p className="w-[250px] h-[40px] bg-white flex justify-between text-dark text-[20px] font-semibold">
                  <span className="w-[100px] p-2">Total:</span>
                  <span className="text-dark w-[150px] p-2">$1357.34</span>
                </p>
              </div>
              <div className="w-[248px] h-[50px] rounded-lg bg-green text-white mid border-[1px] border-borderColor cursor-pointer">
                Check out
              </div>
              <div className="md:mid cursor-pointer">
                <img
                  src="/payments.png"
                  alt=""
                  className="h-[32px] w-[190px]"
                />
              </div>
            </div>
          </div>
        </div>
       <div className=" md:h-[70px] md:ms-0 ms-5">
       <div className=" md:w-[880px] md:mx-20 w-[100%] space-y-4 md:space-y-0 md:flex items-center gap-4 ">
<div className="h-full w-[262px] flex gap-3">
<div className="bg-gray-300 size-[48px] rounded-full mid text-[20px] text-gray-500"><FaLock/></div>
<div className="text-dark"><p>Secure payment</p><p className="text-[#A9ACB0]">Have you ever finaly just</p></div>
</div>
<div className="h-full w-[262px] flex gap-3">
<div className="bg-gray-300 size-[48px] rounded-full mid text-[20px] text-gray-500"><FaMessage/></div>
<div className="text-dark"><p>Customer support</p><p className="text-[#A9ACB0]">Have you ever finaly just</p></div>
</div>
<div className="h-full w-[262px] flex gap-3">
<div className="bg-gray-300 size-[48px] rounded-full mid text-[20px] text-gray-500"><FaTruck/></div>
<div className="text-dark"><p>Free delivery</p><p className="text-[#A9ACB0]">Have you ever finaly just</p></div>
</div>

        </div>
       </div>
        <div className="bg-white md:h-[475px]  md:w-[1180px] w-[100%]  p-6 border-[1px] border-borderColor rounded-lg space-y-3 md:mx-20 ">
         <h1 className="font-semibold">Saved for later</h1>
        <div className="flex md:flex-row flex-col justify-center md:gap-16 gap-5">
            {
                list2.map((item,index)=>(
                    <div className="md:w-[240px] w-[100%] md:h-[382px] p-4 md:p-0 items-start gap-4 justify-start cursor-pointer " key={index}>
                    <div><img src={`/${item.pic}`} alt="" className="md:h-[270px] size-[100%]
                    md:w-[240px] bg-gray-200  border-[1px] border-borderColor rounded-lg hover:border-gray-400 p-2 md:text-[16px] text-[20px] " /></div>
                    <div className="space-y-1 rounded-lg mt-2">
                        <p>{item.name}</p>
                        <p>{item.name2}</p>
                        <p className="text-gray-500">{item.price}</p>
                        <div className="h-[40px] w-[156px] ps-2 text-blue flex items-center gap-3 border-[1px] border-borderColor rounded-lg hover:bg-gray-200 hover:text-dark ">
                            <span className="text-[20px]"><IoCartOutline/></span>Move to cart
                        </div>
                    </div>
                 </div>
                ))
            }
        </div>
       </div>
        <div>
<div className="rounded-xl h-[120px] md:w-[1180px] md:mx-20 w-[100%] bg-cover flex items-center justify-between p-6 mb-14"
    style={{
      backgroundImage:"url('/quotesbg.png')"
    }}
    >
     <div className="text-white ">
      <p className="md:text-[24px] text-[20px] font-semibold text-white">Supper discount on more then 100 USD</p>
      <p className="text-[16px] font-light">Have you ever finally just write dummy info</p>
     </div>
     <div className="hidden md:block">
      <button className="w-[108px] h-[40px] bg-orange rounded-lg text-white mid ">Shop now</button>
     </div>
    </div>
</div>

      </div>
    </div>
  );
}
