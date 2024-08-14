
"use client";

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function LanguageCurrencyDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language selection
  const [selectedCurrency, setSelectedCurrency] = useState('USD'); // Default currency selection
  const [isOpen, setIsOpen] = useState(false); // Dropdown open/close state

  const languages = ["English", "Spanish", "French", "German", "Chinese"];
  const currencies = ["USD", "EUR", "GBP", "JPY", "INR",];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close dropdown after selection
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Trigger */}
      <div 
        className="flex items-center cursor-pointer border px-4 py-2 rounded-lg bg-white shadow gap-2 hover:bg-[#E5F1FF] hover:rounded-lg  "
        
        onClick={toggleDropdown}
      >
        <span>{`${selectedLanguage}, ${selectedCurrency}`}</span>
        <FaChevronDown className="ml-2 text-gray-500" />
    
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className=" absolute left-0 w-[200px] rounded-xl bg-white border-gray-800 shadow-lg"
        style={{
            padding:'12px',
            borderColor:'#78808a',
            marginTop:"10px",
            borderWidth:'1px',
            zIndex:'50'
        }}
        >
          <div className="p-4 flex justify-between">
            <div>
              <h2 className="text-sm font-medium mb-2"
              style={{
                color:'blue'
            }}>Select Language</h2>
            <hr />
              <ul className="list-none">
                {languages.map((language) => (
                  <li 
                    key={language}
                    className="cursor-pointer px-3 py-1 hover:bg-[#E5F1FF]  hover:rounded-lg    "
                    onClick={() => handleLanguageSelect(language)}
                  >
                    {language}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-medium mb-2"
              style={{
                color:'blue'
            }}
              >Select Currency</h2>
              <hr />
              <ul className="list-none">
                {currencies.map((currency) => (
                  <li 
                    key={currency}
                    className="cursor-pointer px-3 py-1 hover:bg-[#E5F1FF]  hover:rounded-lg   "
                    onClick={() => handleCurrencySelect(currency)}
                  >
                    {currency}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
