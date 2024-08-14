"use client";

import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

export default function CountryDropdown() {
  const [selected, setSelected] = useState('PK'); 

  return (
    <div className="relative items-center text-left flex gap-1">
      <h1>Ship to</h1>
      <ReactFlagsSelect
        selected={selected}
        countries={["US", "GB", "FR", "DE", "IT", "PK", "IN"]}
        customLabels={{
          "US": " ",
          "GB": " ",
          "FR": " ",
          "DE": " ",
          "IT": " ",
          "PK": " ",
          "IN": " ",
        }}
        onSelect={code => setSelected(code)}
        className="bg-white px-4 py-2 rounded-lg shadow cursor-pointer"
        selectedSize={18}
        optionsSize={20}
        showOptionLabel={true}
        alignOptionsToRight={false}
        placeholder="Select a country"
        dropdownClassName="border border-gray-300 custom-dropdown"
      />

      <style jsx>{`
        .custom-dropdown::-webkit-scrollbar {
          display: none;
        }
        .custom-dropdown {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}
