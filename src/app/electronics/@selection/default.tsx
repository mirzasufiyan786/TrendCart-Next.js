

import Dropdown from "@/component/Dropdownforsidenavbar"
import Link from "next/link"
import Image from 'next/image';
export default function selection(){

    return(
        <main>
        <div className="hidden   w-[920px]   bg-white h-[62px] md:flex justify-between items-center rounded-lg border-[1px] border-borderColor p-3  ">
<div className="block text-gray-500">
<p>12,911 items in <span className="text-dark ">Mobile accessory</span></p>
</div>
<div className="flex items-center gap-5">
<div className=" flex items-center text-[16px]  gap-2 cursor-pointer">
    <input type="checkbox" className="size-4 rounded-lg"/>
    <p><Link href="/electronics/page2">Verified only</Link></p>
</div>
<div className="border-[1px] px-3 bg-gray-100 mid border-borderColor rounded-lg w-44  h-[40px] ">
<Dropdown title="Features">
          <ul className="border-[1px] absolute mt-2 bg-gray-100 border-borderColor rounded-lg w-44 z-50">
            {["Metallic", "Plastic over", "8GB Ram", "Super power", "Large memory"].map((choice, index) => (
              <li key={index} className="flex items-center p-2 hover:bg-gray-200">
                <input type="checkbox" id={`choice-${index}`} className="mr-2 cursor-pointer" />
                <label htmlFor={`choice-${index}`}>{choice}</label>
              </li>
            ))}
          </ul>
        </Dropdown>
</div>
<div className="w-[76px] h-[40px] bg-white rounded-lg border-[1px]  border-borderColor flex">
    <div className="mid border-e-[1px] rounded-s-lg cursor-pointer border-borderColor h-full w-[50%] ">
      <Link href="/electronics/gridrview"><img src="/view (1).png" alt="img" /></Link>
    </div>
    <div className=" mid h-full w-[50%] cursor-pointer rounded-e-lg">
      <Link href="/electronics">
      <img src="/view (2).png" alt="img" /></Link>
    </div>
</div>
</div>
        </div>
        <div className="md:hidden  w-[100vw]   bg-white h-[62px] flex justify-between items-center rounded-lg border-[1px] border-borderColor px-5  ">



<div className="border-[1px] px-3 bg-gray-100 mid border-borderColor rounded-lg w-44  h-[40px] ">
<Dropdown title="Features">
          <ul className="border-[1px] absolute mt-2 bg-gray-100 border-borderColor rounded-lg w-44 z-50">
            {["Metallic", "Plastic over", "8GB Ram", "Super power", "Large memory"].map((choice, index) => (
              <li key={index} className="flex items-center p-2 hover:bg-gray-200">
                <input type="checkbox" id={`choice-${index}`} className="mr-2 cursor-pointer" />
                <label htmlFor={`choice-${index}`}>{choice}</label>
              </li>
            ))}
          </ul>
        </Dropdown>
</div>
<div className="w-[76px] h-[40px] bg-white rounded-lg border-[1px]  border-borderColor flex">
    <div className="mid border-e-[1px] rounded-s-lg cursor-pointer border-borderColor h-full w-[50%] ">
      <Link href="/electronics/gridrview"><img src="/view (1).png" alt="img" /></Link>
    </div>
    <div className=" mid h-full w-[50%] cursor-pointer rounded-e-lg">
      <Link href="/electronics">
      <img src="/view (2).png" alt="img" /></Link>
    </div>

</div>
        </div>
        </main>
    )
}