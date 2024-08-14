import { MdKeyboardArrowRight } from "react-icons/md";

export default function navbarA(){
    return(
        <main>
        <div className="hidden  h-[64px] px-20 md:flex items-center gap-2 ">
            <div className="flex items-center gap-2 text-gray-500">
                <p>Home </p>
                <MdKeyboardArrowRight/>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
                <p>Clothings </p>
                <MdKeyboardArrowRight/>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
                <p>Men`s wear </p>
                <MdKeyboardArrowRight/>
            </div>
            <div className=" text-gray-500">
                <p>Summer clothing</p>
            </div>
        </div>
        </main>
    )
}