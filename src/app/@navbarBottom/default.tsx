import CategoryDropdown from "@/component/DropDownCategory"
import CountryDropdown from "@/component/Dropdown"
import LanguageCurrencyDropdown from "@/component/LanguageCurrency"
export default function navbarBottom() {
    
  return (
   <>
    <main className=" hidden w-full h-[56px]  px-20 md:flex items-center justify-between text-[16px] font-semibold text-dark">
      <div className="flex gap-3 ">
        <div className="hover:bg-[#E5F1FF] hover:rounded-lg p-2 cursor-pointer"><CategoryDropdown/></div>
        <p className="hover:bg-[#E5F1FF] hover:rounded-lg p-2 cursor-pointer">Hot offers</p>
        <p className="hover:bg-[#E5F1FF] hover:rounded-lg p-2 cursor-pointer">Gift boxes</p>
        <p className="hover:bg-[#E5F1FF] hover:rounded-lg p-2 cursor-pointer">projects</p>
        <p className="hover:bg-[#E5F1FF] hover:rounded-lg p-2 cursor-pointer">Menu items</p>
        <div className="hover:bg-[#E5F1FF] hover:rounded-lg p-2 cursor-pointer">Help</div>
      </div>
      <div className="flex gap-8 items-center">
        <div ><LanguageCurrencyDropdown/></div>
        <div><CountryDropdown/></div>
      </div>
    </main>
    <main className=" md:hidden w-[100%] px-5 bg-white h-[56px] flex items-center justify-between text-[16px] font-semibold text-dark">
      
        <div ><LanguageCurrencyDropdown/></div>
        <div><CountryDropdown/></div>
      
    </main>
   </>
  );
}
