
import Dropdown from "@/component/Dropdownforsidenavbar"
import Link from "next/link";
import { FaStar } from "react-icons/fa";
export default function sidenavbar(){
    return(
        <main className="md:flex hidden h-[1348px] w-[240px] mx-20 border-borderColor border-t-[1px]">
           <div className="flex flex-col   py-2 bg-gray-100">
      <div className="w-[240px] max-w-md space-y-4 mt-4">
        {/* First Dropdown - Simple List */}
        <Dropdown title="Category">
          <ul>
            <li className="p-2 text-gray-600 hover:bg-gray-200 cursor-pointer">
              <Link href="/electronics/mobilecate">Mobile accessory</Link>
            </li>
            <li className="p-2 text-gray-600 hover:bg-gray-200 cursor-pointer">Electronics</li>
            <li className="p-2 text-gray-600 hover:bg-gray-200 cursor-pointer">Smartphones</li>
            <li className="p-2 text-gray-600 hover:bg-gray-200 cursor-pointer">Modern Tech</li>
            <li className="p-2  hover:bg-gray-200 text-blue cursor-pointer">See all</li>
          </ul>
        </Dropdown>
<hr />
        {/* Second Dropdown - Checklist */}
        <Dropdown title="Brands">
          <ul>
            {["Samsung", "Apple", "huawei", "Pocco", "Lenovo"].map((option, index) => (
              <li key={index} className="flex items-center p-2  hover:bg-gray-200">
                <input type="checkbox" id={`checkbox-${index}`} className="mr-2 cursor-pointer" />
                <label htmlFor={`checkbox-${index}`}>{option}</label>
              </li>
            ))}
          </ul>
        </Dropdown>
<hr />
        {/* Third Dropdown - Checklist */}
        <Dropdown title="Features">
          <ul>
            {["Metallic", "Plastic over", "8GB Ram", "Super power", "Large memory"].map((choice, index) => (
              <li key={index} className="flex items-center p-2 hover:bg-gray-200">
                <input type="checkbox" id={`choice-${index}`} className="mr-2 cursor-pointer" />
                <label htmlFor={`choice-${index}`}>{choice}</label>
              </li>
            ))}
          </ul>
        </Dropdown>
<hr />
        {/* Fourth Dropdown - Range Slider and Input Fields */}
        <Dropdown title="Price range">
          <div className="space-y-4">
            <div>
              <input type="range" id="range" className="w-full" />
            </div>
            <div className="flex items-center gap-2">
            <div>
              <label htmlFor="numberInput" className="block mb-2">Min</label>
              <input type="number" id="numberInput" placeholder="0" className="w-[100%] p-2 border rounded-lg" />
            </div>
            <div>
              <label htmlFor="numberInput" className="block mb-2">Max</label>
              <input type="number" id="numberInput" placeholder="9999999"  className="w-[100%] p-2 border rounded-lg" />
            </div>
            </div>
            <div className="w-full border-[1px] border-borderColor rounded-lg mid text-blue bg-white h-[40px]">
                Apply
            </div>
          </div>
        </Dropdown>
        <hr />

        {/* Dropdown 5 - Circular Select Input */}
        <Dropdown title="Condition">
          <ul>
            {["Any", "Refurbished", "Brand new","old items"].map((option, index) => (
              <li key={index} className="flex items-center p-2 hover:bg-gray-200">
                <input type="radio" name="circularOptions" id={`radio-${index}`} className="mr-2 cursor-pointer" />
                <label htmlFor={`radio-${index}`}>{option}</label>
              </li>
            ))}
          </ul>
        </Dropdown>
<hr />
        {/* Dropdown 6 - Rating Stars */}
        <Dropdown title="Ratings">
          <ul>
            {[
              { rating: 5 },
              { rating: 4 },
              { rating: 3 },
              { rating: 2 },
              { rating: 1 }
            ].map(({ rating }, index) => (
              <li key={index} className="flex items-center p-2 hover:bg-gray-200">
                <input type="checkbox" id={`checkbox-${rating}`} className="mr-2 cursor-pointer" />
                <div className="flex items-center">
                  {[...Array(5)].map((_, starIndex) => (
                    
                    <span   className={`mr-1 ${starIndex < rating ? 'text-orange' : 'text-gray-300'}`}
                    key={starIndex}
                    >
                      <FaStar
                      
                     />
                      </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </div>
        </main>
    )
}