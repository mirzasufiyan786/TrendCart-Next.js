"use client";

import { useState } from 'react';
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { IoHeartOutline, IoHeart } from 'react-icons/io5';


  const detaillist = [
    {
      pic: "detail pic (3).jpg",
      name: "Canon Camera EOS 2000, Black 10X zoom",
      price: "$998.00",
      price2: "$1128.00",
      rating: "7.5",
      orders: "154 orders",
      p1: "This product is known for its reliability and durability, offering ",
      p2: "advanced features that meet the needs of modern consumers.",
    },
    {
        pic: "detail pic (2).jpg",
      name: "Nikon D5600 DSLR Camera, 18-55mm Lens Kit",
      price: "$749.00",
      price2: "$849.00",
      rating: "8.2",
      orders: "200 orders",
      p1: "Capture every moment in stunning detail with this Nikon camera, ",
      p2: "featuring an easy-to-use interface and long battery life.",
    },
    {
        pic: "detail pic (4).jpg",
      name: "Sony Alpha A6000 Mirrorless Camera with 16-50mm Lens",
      price: "$598.00",
      price2: "$698.00",
      rating: "8.7",
      orders: "300 orders",
      p1: "Compact and powerful, the Sony Alpha A6000 is perfect for travel, ",
      p2: "offering high-speed shooting and exceptional image quality.",
    },
    {
        pic: "detail pic (1).jpg",
      name: "Fujifilm X-T30 Mirrorless Digital Camera",
      price: "$899.00",
      price2: "$999.00",
      rating: "8.5",
      orders: "120 orders",
      p1: "Designed for enthusiasts, the Fujifilm X-T30 provides advanced features ",
      p2: "and a vintage design, perfect for creative photography.",
    },
    {
        pic: "detail pic (5).jpg",
      name: "GoPro HERO9 Black 5K Action Camera",
      price: "$399.00",
      price2: "$449.00",
      rating: "9.0",
      orders: "450 orders",
      p1: "Capture adventures in stunning 5K with the GoPro HERO9, ",
      p2: "designed to withstand the most extreme conditions.",
    },
    {
        pic: "detail pic (9).jpg",
      name: "Panasonic Lumix G7 4K Mirrorless Camera",
      price: "$497.99",
      price2: "$597.99",
      rating: "7.8",
      orders: "180 orders",
      p1: "Experience professional-grade 4K video and photo capture with the ",
      p2: "Panasonic Lumix G7, ideal for videographers and photographers.",
    },
    {
        pic: "detail pic (7).jpg",
      name: "Olympus OM-D E-M10 Mark IV Mirrorless Camera",
      price: "$699.00",
      price2: "$799.00",
      rating: "8.1",
      orders: "90 orders",
      p1: "A lightweight, portable camera with powerful performance, the Olympus ",
      p2: "OM-D E-M10 Mark IV is perfect for on-the-go photography.",
    },
    {
        pic: "detail pic (8).jpg",
      name: "Leica Q2 Full Frame Compact Camera",
      price: "$4995.00",
      price2: "$5295.00",
      rating: "9.4",
      orders: "50 orders",
      p1: "With an iconic design and cutting-edge technology, the Leica Q2 is ",
      p2: "the ultimate compact camera for discerning photographers.",
    },
    {
        pic: "detail pic (9).jpg",
      name: "Canon PowerShot G7 X Mark III Digital Camera",
      price: "$749.99",
      price2: "$849.99",
      rating: "7.9",
      orders: "210 orders",
      p1: "Perfect for vloggers and content creators, the Canon PowerShot G7 X ",
      p2: "offers 4K video recording and live streaming capabilities.",
    },
    // {
    //     pic: "detail pic (10).jpg",
    //   name: "Sony RX100 VII Premium Compact Camera",
    //   price: "$1298.00",
    //   price2: "$1398.00",
    //   rating: "8.9",
    //   orders: "95 orders",
    //   p1: "A compact powerhouse, the Sony RX100 VII delivers pro-level performance ",
    //   p2: "with a fast lens and advanced autofocus system.",
    // },
  ];
  import Image from 'next/image';

export default function Electronics() {
  const [liked, setLiked] = useState(Array(detaillist.length).fill(false));

  const handleToggle = (index:number) => {
    const updatedLiked = [...liked];
    updatedLiked[index] = !updatedLiked[index];
    setLiked(updatedLiked);
  };

  return (
    <div className="md:h-[1350px] ms-1 md:ms-0 mt-8 md:w-[920px] w-[100%]">
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-2 justify-items-center justify-self-center">
        {detaillist.map((item, index) => (
          <div className="md:h-[405px] h-[370px] md:w-[295px] w-[90%] bg-white border-[1px] border-borderColor rounded-lg md:px-8 px-2 py-2 space-y-3" key={index}>
            <div className="md:size-[230px] size-[120px] mid">
              <img src={`/${item.pic}`} alt="" />
            </div>
            <hr />
            <div className="relative space-y-2">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                <p className="md:text-[20px] text-[16px] font-semibold">{item.price}</p>
                <p className="text-[16px] text-gray-500 font-semibold line-through">{item.price2}</p>
              </div>
              <div className="flex items-center gap-2">
                <ul className="flex text-orange">
                  <li><IoMdStar /></li>
                  <li><IoMdStar /></li>
                  <li><IoMdStar /></li>
                  <li><IoMdStar /></li>
                  <li><IoMdStarHalf /></li>
                </ul>
                <p className="text-orange">{item.rating}</p>
              </div>
              <p className="text-[16px] text-dark font-medium">{item.name}</p>
              <div className="absolute size-[40px] border-[1px] border-borderColor rounded-lg bg-white shadow-md mid text-[24px] text-blue md:top-0 -top-[70px] right-0">
                <div onClick={() => handleToggle(index)} className="cursor-pointer">
                  {liked[index] ? (
                    <IoHeart size={24} color="blue" /> // Full heart icon
                  ) : (
                    <IoHeartOutline size={24} color="blue" /> // Empty heart icon
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


  