import { IoMail, IoCall } from "react-icons/io5";

export default function aboutseller() {
    const sellerInfo = {
        name: "John's Electronics",
        email: "johns.electronics@example.com",
        phone: "+123-456-7890",
    };

    const testimonials = [
        {
            customer: "Alice Johnson",
            comment: "Great seller! The product arrived on time and was exactly as described. Highly recommend!",
        },
        {
            customer: "Mark Wilson",
            comment: "Excellent customer service and fast shipping. Will definitely buy again!",
        },
    ];

    return (
        <main className="bg-gray-50 border-[1px] border-gray-300 rounded-lg md:w-[880px] h-[617px] w-[350px] md:ms-20 py-[50px] px-10  space-y-5">
            <div className="text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mt-6 lg:mt-10">{sellerInfo.name}</h2>
            </div>

            <div className="bg-white shadow-lg p-4 lg:p-6 rounded-lg border border-gray-300">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2 lg:mb-4">Contact Information</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-2">
                    <span className="text-gray-600 mr-3"><IoMail /></span>  
                    <span className="text-gray-600">{sellerInfo.email}</span>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <span className="text-gray-600 mr-3"><IoCall /></span>  
                    <span className="text-gray-600">{sellerInfo.phone}</span>
                </div>
            </div>

            <div className="bg-white shadow-lg p-4 lg:p-6 rounded-lg border border-gray-300">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-2 lg:mb-4">Customer Testimonials</h3>
                <ul className="space-y-3 lg:space-y-4">
                    {testimonials.map((testimonial, index) => (
                        <li key={index} className="border-b border-gray-200 pb-3 lg:pb-4">
                            <p className="text-gray-700 font-medium">{testimonial.customer}</p>
                            <p className="text-gray-600">{testimonial.comment}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
