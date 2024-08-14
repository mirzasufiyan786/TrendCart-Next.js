"use client";
import Image from 'next/image';
const offerlist = [
  {
    name: "Smart watches",
    pic: "8.png",
    desc: "-125%",
  },
  {
    name: "Laptops",
    pic: "7.png",
    desc: "-15%",
  },
  {
    name: "GoPro cameras",
    pic: "6.png",
    desc: "-40%",
  },
  {
    name: "Headphones",
    pic: "5.png",
    desc: "-25%",
  },
  {
    name: "Canon cameros",
    pic: "3.png",
    desc: "-25%",
  },
];
const recomendlist = [
  {
    price: "$10.3",
    name1: "T-shirts with multiple",
    name2: "color for men",
    pic: "recom (1).jpg",
  },
  {
    price: "$10.30",
    name1: "Jeans jacket",
    name2: "women",
    pic: "recom (2).jpg",
  },
  {
    price: "$12.3",
    name1: "Pent coat",
    name2: "for boys",
    pic: "recom (3).jpg",
  },
  {
    price: "$15.3",
    name1: "jeans bag for",
    name2: "travlers",
    pic: "recom (4).jpg",
  },
  {
    price: "$10.6",
    name1: "lorem lorem",
    name2: "lore lore",
    pic: "recom (5).jpg",
  },
  {
    price: "$15.3",
    name1: "Shorts",
    name2: "take pic",
    pic: "recom (6).jpg",
  },
  {
    price: "$10.3",
    name1: "Headphones",
    name2: "lore lore",
    pic: "recom (7).jpg",
  },
  {
    price: "$11.3",
    name1: "Best quality",
    name2: "lore lore",
    pic: "recom (8).jpg",
  },
  {
    price: "$10.3",
    name1: "Dod dyaloiu",
    name2: "men clothes",
    pic: "recom (9).jpg",
  },
  {
    price: "$10.3",
    name1: "kjoqsjn NNjis",
    name2: "best order",
    pic: "recom (10).jpg",
  },
];
const servicelist=[
  {
    p1:"Source from",
    p2:"Industry Hub",
    pic:"services (1).png",
    icon:"servicon (2).png"
  },
  {
    p1:"Customize your",
    p2:"Products",
    pic:"services (4).png",
    icon:"servicon (3).png"
  },
  {
    p1:"Fast, reliable shipping",
    p2:"by ocean or air",
    pic:"services (3).png",
    icon:"servicon (4).png"
  },
  {
    p1:"Product monitoring",
    p2:"and inspection",
    pic:"services (2).png",
    icon:"servicon (1).png"
  },
]
const flaglist=[
  {
    pic:"flag (1).png",
    name:"Arabic Amirates"
  },
  {
    pic:"flag (2).png",
    name:"United State"
  },
  {
    pic:"flag (3).png",
    name:"Russia"
  },
  {
    pic:"flag (4).png",
    name:"Italy"
  },
  {
    pic:"flag (1).png",
    name:"Great britian"
  },
  {
    pic:"flag (3).png",
    name:"France"
  },
  {
    pic:"flag (4).png",
    name:"Arabic Amirates"
  },
  {
    pic:"flag (2).png",
    name:"Demmark"
  },
  {
    pic:"flag (1).png",
    name:"China"
  },
  {
    pic:"flag (3).png",
    name:"Arabic Amirates"
  },
]
import { useState, useEffect, AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import { FaChevronDown } from "react-icons/fa";
import CounterComponent from "@/component/CounterComponent ";
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import TypingComponent from "@/component/TypingComponentProps";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}
export default function Home() {
  const words2 = ["Mobiles", "Headphones", "and other Electronic items"];
  const words3 = ["Mobiles", "Headphones", "Electronic"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Pcs");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  // ---------usecustom hook to fetch data--------------
  const BASE_URL = "https://fakestoreapi.com/products";
  const { data, loading, error } = useFetchData(BASE_URL);
  const displayedProducts = data.slice(0, 8);
  const displayedProducts2 = data.slice(8, 16);

  // ---------usecustom hook to fetch data--------------

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: "/mailslider1.png", alt: "First slide" },
    { src: "/mainslider2.png", alt: "Second slide" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const categories = [
    "Electronics",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "Other products",
  ];
  return (
    <main className='md:block  flex flex-col items-center'>
      {/* -------MAIN SLIDER CODE STARTS------------ */}
      <div className="md:h-[400px] h-[300px] md:ms-20 bg-white border-[2px] border-[#b3b1b17e] md:w-[1190px] w-[90%] rounded-lg my-2 shadow-md flex px-4 py-6">
        {/* ----------slider left part--------- */}
        <div className="hidden md:block h-full w-[25%]">
          <ul className="px-2 text-[16px] text-gray-600">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`p-2 cursor-pointer rounded-lg hover:font-semibold hover:text-dark ${
                  activeIndex === index
                    ? "bg-[#E5F1FF] font-medium text-dark"
                    : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        {/* ----slider mid part-------- */}
        <div className="h-full md:w-[55%] w-[100%]  ">
          <div className="relative w-full h-[100%]" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-[250px] overflow-hidden  md:h-[350px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute  z-10 inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                  data-carousel-item
                >
                  <div className="absolute z-10 flex flex-col p-10">
                    <span className="text-[28px]  text-dark">
                      Latest trending
                    </span>
                    <span className="hidden md:block text-[32px] font-bold text-dark">
                      <TypingComponent words={words2}/>
                    </span>
                    <span className="block md:hidden text-[32px] font-bold text-dark">
                      <TypingComponent words={words3}/>
                    </span>
                    <button className="w-[119px] h-[40px] bg-white text-dark text-[16px] text-center rounded-lg hover:font-semibold hover:text-blue">
                     <Link href="/electronics"> Learn more</Link>
                    </button>
                  </div>
                  <img
                    src={slide.src}
                    className="block w-full h-full object-cover"
                    alt={slide.alt}
                  />
                </div>
              ))}
            </div>
            {/* Slider indicators */}
            <div className="absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  aria-current={index === currentSlide}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
        {/* ---------slider right part-------- */}
        <div className="hidden md:block h-full w-[20%] ps-4 space-y-2">
          <div className="w-full h-[42%] bg-slate rounded-lg p-3 space-y-2">
            <div className="flex gap-2">
              <img src="/profile.png" alt="user" />
              <div>
                <h1>Hi, user</h1>
                <p>Let`s get started</p>
              </div>
            </div>
            <div className="w-[180px] h-[30px] bg-blue border-[1px] border-dark text-white rounded-lg text-center cursor-pointer">
              Join now
            </div>
            <div className="w-[180px] h-[30px] border-[1px] border-[#e4e2e2]  rounded-lg text-blue bg-white text-center cursor-pointer">
              Log in
            </div>
          </div>
          <div className="w-full h-[26%] bg-orange border-[1px] border-dark text-[16px] text-white text-start px-6 py-2 space-y-1 rounded-lg">
            <p>Get US $10 off</p>
            <p>with a new</p>
            <p>supplier</p>
          </div>
          <div className="w-full h-[27%] bg-[#55BDC3] text-[16px] text-white text-start px-6 py-3 space-y-1 rounded-lg">
            <p>Send quotes with</p>
            <p>supplier</p>
            <p>preferences</p>
          </div>
        </div>
      </div>
      {/* ------------main slide code ends-------------- */}

      {/* ------------DEALS SECTION CODE STARTS------------- */}
      <div className="md:h-[240px] h-[1550px] md:w-[1190px] w-[80%] md:ms-20 bg-white rounded-lg border-[1px] border-borderColor ps-[7%] md:ps-0 md:flex mt-10">
        {/* ------------ */}
        <div className="p-6 space-y-4 md:w-[300px] w-[90%]">
          <div>
            <p className="text-[20px] font-semibold text-dark">
              Deals and Offers
            </p>
            <p className="text-[16px] text-gray-500 font-normal">
              Hygiene Equipments
            </p>
          </div>
          <div>
            <CounterComponent/>
          </div>
        </div>
        {/* --------------------- */}
        <div className="md:flex space-y-5 md:space-y-0 ">
          {offerlist.map((item, index) => (
            <div
              key={item.pic}
              className={`md:w-[179px] w-[90%] md:h-full h-[250px]   md:border-s-[1px] md:border-e-[1px] border-[1px] border-borderColor mid flex-col space-y-2 cursor-pointer
    ${index === 4 ? "rounded-e-lg" : "rounded-none"}
  `}
            >
              <img src={`/${item.pic}`} alt="" />
              <p className="hover:text-blue">{item.name}</p>
              <p className="h-[28px] w-[61px] text-red  bg-[#FFE3E3] rounded-xl mid">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* ----------deal section code ends----------- */}

      {/* -------HOME AND OUTDOOR SECTION CODE START------------- */}
      <div className="hidden md:flex h-[255px] w-[1190px] ms-20 bg-white rounded-lg border-[1px] border-borderColor mt-4  ">
        {/* ------------ */}
        <div
          className="p-6 space-y-4 w-[300px] h-full bg-cover"
          style={{
            backgroundImage: "url('/homebg.png')",
          }}
        >
          <div>
            <p className="text-[20px] font-semibold text-dark">Home and</p>
            <p className="text-[20px] font-semibold text-dark">outdoor</p>
          </div>
          <button className="w-[119px] h-[40px] text-dark bg-white text-[16px] text-center rounded-lg">
            Source now
          </button>
        </div>
        {/* ------------- */}
        <div>
          <div className="grid grid-cols-4 ">
            {loading && <h1>Loading...</h1>}
            {error && <div className="text-blue">some thing went wrong...</div>}
            {/* Added gap for better spacing */}
            {displayedProducts.map((product, index) => (
              <div
                key={product.id}
                className={`w-[223px] h-[127px] bg-white flex justify-between p-4 border-s-[1px] border-e-[1px] border-b-[1px] border-borderColor cursor-pointer 
            ${index === 3 || index === 7 ? "rounded-e-lg" : "rounded-none"}
            `}
              >
                <div>
                  <p className="hover:text-blue">{product.category}</p>
                  <p className="text-gray-500">from</p>
                  <p className="text-gray-500">${product.price}</p>{" "}
                  {/* Added $ sign for price */}
                </div>
                <div className="mt-5 bg-blue w-[82px] h-[82px]">
                  {" "}
                  {/* Adjusted size to use Tailwind classes */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ----home and outdoor section code ends here---------- */}
      {/* --------Consumer other sectio code starts------------ */}
      <div className=" hidden h-[255px] w-[1190px] ms-20 bg-white rounded-lg border-[1px] border-borderColor mt-4 md:flex ">
        {/* ------------ */}
        <div
          className="p-6 space-y-4 w-[300px] h-full bg-cover"
          style={{
            backgroundImage: "url('/electronics.png')",
          }}
        >
          <div>
            <p className="text-[20px] font-semibold text-dark">Consumer</p>
            <p className="text-[20px] font-semibold text-dark">
              electronics and{" "}
            </p>
            <p className="text-[20px] font-semibold text-dark">gadgets </p>
          </div>
          <button className="w-[119px] h-[40px] text-dark bg-white text-[16px] text-center rounded-lg">
            Source now
          </button>
        </div>
        {/* ------------- */}
        <div>
          <div className="grid grid-cols-4 ">
          {loading && <h1>Loading...</h1>}
          {error && <div className="text-blue">some thing went wrong...</div>}
         
            {displayedProducts2.map((product,index) => (
              <div
                key={product.id}
                className={`w-[223px] h-[127px] bg-white flex justify-between p-4 border-s-[1px] border-e-[1px] border-b-[1px] border-borderColor cursor-pointer 
            ${index === 3 || index === 7 ? "rounded-e-lg" : "rounded-none"}
            `}
              >
                <div>
                  <p className="hover:text-blue">{product.category}</p>
                  <p className="text-gray-500 ">from</p>
                  <p className="text-gray-500">${product.price}</p>{" "}
                  {/* Added $ sign for price */}
                </div>
                <div className="mt-5 bg-blue w-[82px] h-[82px]">
                  {" "}
                  {/* Adjusted size to use Tailwind classes */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* --------Consumer other sectio code ends------------ */}
      {/* ----------quote to supplier section start---------- */}
      <div
        className="h-[400px] md:ms-20 bg-white md:w-[1190px] w-[90%] rounded-lg my-2 shadow-md flex md:px-5 py-6 bg-cover justify-between px-[10%]"
        style={{
          backgroundImage: "url('/quotesbg.png')",
        }}
      >
        <div className="text-[32px] text-white font-semibold px-4 py-2">
          <p>An easy way to send</p>
          <p>requests to all suppliers</p>
          <p className="text-[16px] font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-[16px] font-normal">
            Lorem ipsum dolor, sit amet consectetur.
          </p>
        </div>
        <div className="hidden md:block w-[491px] h-[346px] bg-white rounded-lg p-5 space-y-5">
          <p className="text-[20px] font-semibold text-dark">
            Send quote to suppliers
          </p>
          <input
            type="text"
            placeholder="What items you need?"
            className="border-[1px] border-borderColor p-2 rounded-lg w-[440px] h-[40px] outline-none placeholder-dark"
          />
          <textarea
            placeholder="Type more details"
            className="border-[1px] border-borderColor p-2 rounded-lg w-[440px] h-[40px] outline-none"
          ></textarea>
          {/* dropdown-------- */}
          <div className="flex gap-3">
            <div className="h-[40px] w-[200px] border-[1px] rounded-lg border-borderColor mid">
              Quantity
            </div>
            <div className="h-[40px] w-[145px] border-[1px] rounded-lg border-borderColor">
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
                  <div
                    className="absolute border-[1px] border-gray-600 bg-white w-[145px]"
                    style={{
                      zIndex: "50",
                    }}
                  >
                    <ul className="list-none text-start ">
                      <li
                        className="cursor-pointe px-3 py-1 hover:text-white hover:bg-blue"
                        onClick={() => handleOptionClick("Pcs")}
                      >
                        Pcs
                      </li>
                      <li
                        className="cursor-pointe px-3 py-1 hover:text-white hover:bg-blue"
                        onClick={() => handleOptionClick("One")}
                      >
                        one
                      </li>
                      <li
                        className="cursor-pointe px-3 py-1 hover:text-white hover:bg-blue"
                        onClick={() => handleOptionClick("Two")}
                      >
                        Two
                      </li>
                      <li
                        className="cursor-pointe px-3 py-1 hover:text-white hover:bg-blue"
                        onClick={() => handleOptionClick("Three")}
                      >
                        Three
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* ------dropdown end---- */}
          <button className="w-[119px] h-[40px] text-white bg-blue text-[16px] text-center rounded-lg">
            Send inquiry
          </button>
        </div>
      </div>
      {/* ----------quote to supplier section end---------- */}
      {/* ---------Recomended item section starts------- */}
      <div className="md:h-[696px] ps-[5%] md:ps-0 h-[1350px] md:ms-20  md:w-[1190px] w-[90%] bg-gray-100 ">
        <h1 className="text-[20px] font-semibold mt-5 mb-5">Recommended items</h1>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
          {recomendlist.map((item) => (
            <div
              className="md:w-[234px] w-[90%] md:h-[310px] h-[100%] bg-white border-[1px] border-borderColor rounded-lg text-[16px] text-gray-500 cursor-pointer"
              key={item.pic}
            >
              <img src={`/${item.pic}`} alt="img" className="rounded-ss-lg" />
              <div className="px-4 group">
                <p className="text-dark">{item.price}</p>
                <p className="group-hover:text-blue ">{item.name1}</p>
                <p className="group-hover:text-blue ">{item.name2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* -----------extra services code sSTARTS----- */}
      <div className="md:h-[256px] ps-[5%] md:ps-0 h-[950px] md:ms-20  md:w-[1190px] w-[90%] bg-gray-100 ">
        <h1 className="text-[20px] font-semibold mt-5 mb-5">Our extra services</h1>
        <div className="md:flex md:gap-7 ">
          {
            servicelist.map((item)=>(
              <div className="relative w-[92%] md:h-[200px] h-[95%] border-[1px] border-borderColor rounded-lg bg-white text-[16px] mt-6 md:mt-0 cursor-pointer text-dark font-medium" key={item.pic}>
        <div className=" h-[120px] w-full bg-dark rounded-t-lg ">
<img src={`/${item.pic}`} alt="img" />
        </div>
        <span className="absolute right-8 top-24 rounded-full mid size-[55px] bg-slate  ">
        <img src={`/${item.icon}`} alt="img" />
        </span>
       <div className="p-3">
       <p>{item.p1}</p>
       <p>{item.p2}</p>
       </div>
          </div>
            ))
          }
        </div>
      </div>
       {/* -----------extra services code ends----- */}
       {/* ---------Supplier by regions cose STARTS----------- */}
       <div className="md:h-[236px] ps-[5%] md:ps-0  h-[100%] mb-5 md:mb-0 md:ms-20  md:w-[1190px] w-[90%] ">
       <h1 className="text-[20px] font-semibold mt-5 mb-5">Suppliers by region</h1>
       <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
        {
          flaglist.map((item,index)=>(
            <div className="flex items-center gap-2 md:w-full w-[90%]" key={index}>
        <img src={`/${item.pic}`} alt="" />
        <div className="mt-2">
          <p>{item.name}</p>
          <p className="text-[13px] text-gray-500">shopname.ae</p>
        </div>
       </div>
          ))
        }
       </div>
       </div>
       {/* ---------Supplier by regions cose ends----------- */}
      
    </main>
  );
}
