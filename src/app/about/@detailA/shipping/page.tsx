import React from "react";

export default function Shipping() {
  // Example shipping options data
  const shippingOptions = [
    {
      method: "Standard Shipping",
      cost: "$5.00",
      deliveryTime: "5-7 business days",
    },
    {
      method: "Express Shipping",
      cost: "$15.00",
      deliveryTime: "2-3 business days",
    },
    {
      method: "Overnight Shipping",
      cost: "$25.00",
      deliveryTime: "1 business day",
    },
  ];

  return (
    <main className="bg-white border-[1px] border-borderColor rounded-lg md:w-[880px] h-auto w-[350px] md:ms-20 py-[70px] p-6 space-y-6">
      <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mt-4 lg:mt-6">
        Shipping Options
      </h2>
      <div className="space-y-4">
        {shippingOptions.map((option, index) => (
          <div key={index} className="p-4 border border-borderColor rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <span className="text-lg font-medium text-gray-700">
                {option.method}
              </span>
              <span className="text-lg font-medium text-gray-700 mt-2 sm:mt-0">
                {option.cost}
              </span>
            </div>
            <p className="text-gray-600">
              Estimated delivery: {option.deliveryTime}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
