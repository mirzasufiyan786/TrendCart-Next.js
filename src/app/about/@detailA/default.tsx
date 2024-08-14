import { IoCheckmark } from "react-icons/io5";
export default function detailA(){
    return(
        <main className="bg-white border-[1px] border-borderColor rounded-lg w-full max-w-[880px] h-auto lg:h-[618px] mx-auto lg:ms-20 py-[40px] lg:py-[70px] p-4 lg:p-6 space-y-4 lg:space-y-6">
        <div className="mt-10 text-gray-600">
          <p>
            Discover the ultimate online shopping experience with our eCommerce
            app, designed to make your buying and selling process seamless and
            enjoyable. Our platform offers a wide range of high-quality products,
            from fashionable clothing and accessories to cutting-edge electronics
            and home essentials. With a user-friendly interface and powerful
            search functionality, finding the perfect item has never been easier.
            Browse through detailed product listings, complete with
            high-resolution images, comprehensive descriptions, and customer
            reviews to make informed purchasing decisions. Our app ensures a
            secure and smooth checkout process, offering multiple payment options
            and efficient order tracking.
          </p>
        </div>
        <div className="h-auto w-full max-w-[570px] border-[1px] border-borderColor ">
          <div className="w-full h-[36px] flex border-b-[1px] border-borderColor">
            <div className="w-[40%] bg-gray-200 flex items-center px-3">Modal</div>
            <div className="w-[60%] text-black flex items-center px-3 bg-white">
              #878687
            </div>
          </div>
          <div className="w-full h-[36px] flex border-b-[1px] border-borderColor">
            <div className="w-[40%] bg-gray-200 flex items-center px-3">Style</div>
            <div className="w-[60%] text-black flex items-center px-3">
              Clasic style
            </div>
          </div>
          <div className="w-full h-[36px] flex border-b-[1px] border-borderColor">
            <div className="w-[40%] bg-gray-200 flex items-center px-3">
              Certificate
            </div>
            <div className="w-[60%] text-black flex items-center px-3">
              Iso-232687
            </div>
          </div>
          <div className="w-full h-[36px] flex border-b-[1px] border-borderColor">
            <div className="w-[40%] bg-gray-200 flex items-center px-3">Size</div>
            <div className="w-[60%] text-black flex items-center px-3">
              34mm-45mm-12mm
            </div>
          </div>
          <div className="w-full h-[36px] flex border-b-[1px] border-borderColor">
            <div className="w-[40%] bg-gray-200 flex items-center px-3">
              Memory
            </div>
            <div className="w-[60%] text-black flex items-center px-3 bg-white">
              36GB RAM
            </div>
          </div>
        </div>
        <div>
          <ul className="text-gray-500">
            <li className="flex items-center gap-3">
              <span>
                <IoCheckmark />
              </span>
              Some great features name here
            </li>
            <li className="flex items-center gap-3">
              <span>
                <IoCheckmark />
              </span>
              Lorem ipsum dolor sit.
            </li>
            <li className="flex items-center gap-3">
              <span>
                <IoCheckmark />
              </span>
              Lorem ipsum dolor sit amet.
            </li>
            <li className="flex items-center gap-3">
              <span>
                <IoCheckmark />
              </span>
              Some great features name here
            </li>
          </ul>
        </div>
      </main>
    )
}