"use client"
import Image from 'next/image';
import { CiGlobe } from "react-icons/ci";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { SetStateAction, useState } from "react";
import { IoMdStar,IoMdStarHalf } from "react-icons/io";
import { IoCheckmark, } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { LiaOpencart } from "react-icons/lia";
export default function About(){

  const [selectedImage, setSelectedImage] = useState('/selectimg (6).jpg');
  const [activeIndex, setActiveIndex] = useState(0)
  const images = [
    '/selectimg (1).jpg',
    '/selectimg (2).jpg',
    '/selectimg (3).jpg',
    '/selectimg (4).jpg',
    '/selectimg (5).jpg',
    '/selectimg (6).jpg',
  ];
  const handleImageClick = (image: SetStateAction<string>, index: SetStateAction<number>) => {
    setSelectedImage(image);
    setActiveIndex(index);
  };

  const [isLiked, setIsLiked] = useState(false);
  const handleToggle = () => {
    setIsLiked(!isLiked);
};
    return(
        <main className="bg-white md:h-[580px] h-[1600px] md:w-[1180px] w-[100%] md:mx-20 md:flex p-4 gap-7 border-[1px] border-borderColor rounded-lg">
      <div className=" md:w-[380px] w-[100%] bg-white h-[500px] rounded-lg md:block flex flex-col justify-center items-center">
      <div className="border-[1px] border-borderColor rounded-lg md:size-[380px] 
      size-[80%]">
        <img src={selectedImage} alt="" className="md:size-[380px] size-[100%] rounded-t-lg rounded-b-lg border-b-[1px] border-borderColor" />
      </div>
      <div className="bg-white mt-10 md:w-[381px] w-[80%] h-[56px] flex gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`md:size-[56px] size-[100%] border-[1px] border-${activeIndex === index ? 'blue' : 'borderColor'} rounded-lg cursor-zoom-in`}
            onClick={() => handleImageClick(image, index)}
          >
            <img src={image} alt="" className="size-[56px] rounded-b-lg border-b-[1px] border-borderColor rounded-t-lg" />
          </div>
        ))}
      </div>
    </div>
      <div className="md:w-[430px] w-[100%] mt-14 md:mt-0 md:h-[514px] h-[600px] bg-white space-y-1">
      <li className="flex items-center gap-3 text-green"><span><IoCheckmark/></span>In stock</li>
      <p className="text-[20px] font-semibold">Mens Long Sleeve T-shirt Cotton Base</p>
      <p className="text-[20px] font-semibold">Layer Slim Muscle</p>
      <div className="flex items-center gap-2">
        <ul className="flex text-orange">
            <li><IoMdStar/></li>
            <li><IoMdStar/></li>
            <li><IoMdStar/></li>
            <li><IoMdStar/></li>
            <li><IoMdStarHalf/></li>
        </ul>
        <p className="text-orange">9.3</p>
        <span className="size-2 rounded-full bg-gray-300"></span>
        <p className="text-gray-500 flex items-center gap-2">
          <span><MdOutlineMessage/></span>
          32 reviews</p>
        <span className="size-2 rounded-full bg-gray-300"></span>
        <p className="text-gray-500 flex items-center gap-2">
          <span><LiaOpencart/></span>
          154 sold</p>
    </div>
    <div className="bg-[#FFF0DF] h-[72px] md:w-[430px] w-[300px] flex gap-8 p-3">
<div>
  <p className="md:text-[18px] text-[16px] text-red font-semibold">$98.00</p><p className="text-gray-400 md:text-[13px] text-[11px]">50 - 100 pcs</p>
</div>
<div className="w-[2px] h-[50px] bg-[#BDC1C8]"></div>
<div>
  <p className="md:text-[18px] text-[16px] font-semibold">$90.00</p><p className="text-gray-400 md:text-[13px] text-[11px]">100 - 700 pcs</p>
</div>
<div className="w-[2px] h-[50px] bg-[#BDC1C8]"></div>
<div>
  <p className="md:text-[18px] text-[16px] font-semibold">$78.00</p><p className="text-gray-400 md:text-[13px] text-[11px]">300+ pcs</p>
</div>
    </div>
   <p className="w-[430px] h-[40px] flex justify-between text-gray-500"><span className="w-[150px] p-2 ">Price:</span> <span className="text-dark w-[250px]  p-2">Negotiable</span></p>
   <hr />
   <div>
   <p className="w-[430px] h-[40px] flex justify-between text-gray-500">
    <span className="w-[150px] p-2">Type:</span>
    <span className="text-dark w-[250px] p-2">Classic shoes</span>
  </p>
  <p className="w-[430px] h-[40px] flex justify-between text-gray-500">
    <span className="w-[150px] p-2">Material:</span>
    <span className="text-dark w-[250px] p-2">Plastic material</span>
  </p>
  <p className="w-[430px] h-[40px] flex justify-between text-gray-500">
    <span className="w-[150px] p-2">Design:</span>
    <span className="text-dark w-[250px] p-2">Modern nice</span>
  </p>
   </div>
   <hr />
   <div>
   <p className="w-[430px] h-[40px] flex justify-between text-gray-500">
    <span className="w-[150px] p-2">Customization:</span>
    <span className="text-dark w-[250px] p-2">Logo n design.</span>
  </p>
  <p className="w-[430px] h-[40px] flex justify-between text-gray-500">
    <span className="w-[150px] p-2">Protection:</span>
    <span className="text-dark w-[250px] p-2">Refund policy</span>
  </p>
  <p className="w-[430px] h-[40px] flex justify-between text-gray-500">
    <span className="w-[150px] p-2">Warranty:</span>
    <span className="text-dark w-[250px] p-2">2 years warranty</span>
  </p>
   </div>
      </div>
     <div>
     <div className="bg-white md:w-[280px] w-[100%] h-[325px] rounded-lg p-4 space-y-4 border-[1px] border-borderColor">
<div className="flex gap-4">
  <img src="/img.jpg" alt="" className="size-[48px] rounded-lg" />
  <div><p>Supplier</p><p>Guanjio trading LLC</p></div>
</div>
<hr />
<div className="space-y-2 text-gray-500">
  <div className="flex items-center gap-3">
    <img src="flag (1).png" alt="flag" className="size-[20px]" />
    <p>Germany, Berlin</p>
  </div>
  <div className="flex items-center gap-3">
    <span className="size-[20px]"><MdOutlineVerifiedUser/></span>
    <p>Verified Seller</p>
  </div>
  <div className="flex items-center gap-3">
  <span className="size-[20px]"><CiGlobe/></span>
    <p>Worldwide shipping</p>
  </div>
</div>
<div className="space-y-3 ">
<div className="w-[248px] h-[40px] rounded-lg bg-blue text-white mid">
  Send inquiry
</div>
<div className="w-[248px] h-[40px] rounded-lg bg-white text-blue mid border-[1px] border-borderColor">
  Seller`s profile
</div>
</div>
      </div>
      <div className="bg-white w-[153px]  text-blue font-medium flex items-center gap-3 h-[24px] mx-auto my-8  cursor-pointer"
      onClick={handleToggle}
      >
  <span className="text-[24px]">
  {isLiked ? (
                <IoMdHeart size={24} /> 
            ) : (
                <IoMdHeartEmpty size={24}  /> 
            )}
     </span>    Save for letter
      </div>
     </div>
        </main>
    )
}