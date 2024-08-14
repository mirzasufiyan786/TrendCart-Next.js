const fotterlist = [
  {
    heading: "About",
    l1: "About US",
    l2: "Find store",
    l3: "Categories",
    l4: "Blogs",
  },
  {
    heading: "Partnership",
    l1: "About US",
    l2: "Find store",
    l3: "Categories",
    l4: "Blogs",
  },
  {
    heading: "Information",
    l1: "Help Center",
    l2: "Money Refund",
    l3: "Shipping",
    l4: "Contact Us",
  },
  {
    heading: "For Users",
    l1: "Login",
    l2: "Register",
    l3: "Settings",
    l4: "My Orders",
  },
];
import Image from 'next/image';
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
export default function footer() {
  return (
    <>
      {/* --------Subscription code STARTS---------- */}
      <div className="hidden  bg-gray-200 h-[190px] md:flex flex-col items-center justify-center gap-2">
        <h1 className="text-dark text-[20px] font-semibold">
          Subscribe on oue Newsletter
        </h1>
        <p className="text-[16px] text-gray-500">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <div className="flex gap-2">
          <div className="border-[1px] border-borderColor rounded-lg w-[274px] h-[40px] bg-white flex items-center gap-2 text-[24px] text-gray-500 p-2">
            <CiMail />
            <input
              type="text"
              placeholder="Email"
              className="w-[204px] h-[35px] placeholder-gray-500 text-[16px] outline-none"
            />
          </div>
          <button className="w-[119px] h-[40px] text-white bg-blue text-[16px] text-center rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
      {/* --------Subscription code ends---------- */}
      {/*----------main Footer code STARTS--------- */}
      <div className="md:h-[240px] ps-4   h-[240px] md:w-full w-[100%] md:px-20  bg-white md:flex gap-12">
        <div className="md:w-[276px] w-[100%] md:h-full h-[240px] text-gray-600 py-10 space-y-3 ps-[10%] md:ps-0  ">
         <Link href="/">
         <img
            src="/logo-colored.jpg"
            alt="logo"
            className="w-[150px] h-[46px]"
          />
         </Link>
         <div> <p>Best information about the company</p>
         <p> gies here but now lorem ipsum is</p></div>
          <ul className="flex gap-2">
            <li className="size-[32px] bg-gray-400 text-white rounded-full mid hover:text-gray-900 cursor-pointer ">
              <FaFacebookF />
            </li>
            <li className="size-[32px] bg-gray-400 text-white rounded-full mid hover:text-gray-900 cursor-pointer">
              <FaTwitter />
            </li>
            <li className="size-[32px] bg-gray-400 text-white rounded-full mid hover:text-gray-900 cursor-pointer">
              <FaLinkedin />
            </li>
            <li className="size-[32px] bg-gray-400 text-white rounded-full mid hover:text-gray-900 cursor-pointer">
              <FaInstagram />
            </li>
            <li className="size-[32px] bg-gray-400 text-white rounded-full mid hover:text-gray-900 cursor-pointer">
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div className="grid md:grid-cols-4 md:gap-16 grid-cols-2 ml-20 md:ml-0">
          {fotterlist.map((item, index) => (
            <div className="w-[120px] h-full  py-10" key={index}>
              <ul className="text-[16px] text-gray-500 space-y-1">
                <li className="text-dark font-medium mb-3 cursor-pointer">{item.heading}</li>
                <li className="hover:text-dark cursor-pointer">{item.l1}</li>
                <li className="hover:text-dark cursor-pointer">{item.l2}</li>
                <li className="hover:text-dark cursor-pointer">{item.l3}</li>
                <li className="hover:text-dark cursor-pointer">{item.l4}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="hidden md:block h-full w-[200px] py-10 ml-20 md:ml-0 space-y-3 cursor-pointer">
<p>Get App</p>
<img src="/Getapp (1).png" alt="img" />
<img src="/Getapp (2).png" alt="img" />
        </div>
        <div className=" md:hidden bg-gray-100  h-[60px]   w-[100%] px-6 text-blue flex items-center justify-between ">
<h1>&copy; 2024 MIRZA.</h1>
<div className="flex items-center gap-2 cursor-pointer">
    <img src="/flag (1).png" alt="img" className="h-[20px]" />
    <span className="text-[20px]">English</span>
</div>
      </div>
      </div>
      {/*----------main Footer code ends--------- */}
      <div className="hidden bg-gray-200  h-[60px] w-full  px-20 text-[#606060] md:flex items-center justify-between">
<h1>&copy; 2024 MIRZA.</h1>
<div className="flex items-center gap-2 cursor-pointer">
    <img src="/flag (1).png" alt="img" className="h-[20px]" />
    <span className="text-[20px]">English</span>
</div>
      </div>
    </>
  );
}
