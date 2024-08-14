import { IoStar, IoStarOutline } from "react-icons/io5";

export default function Reviews() {
  // Example review data
  const reviews = [
    {
      username: "John Doe",
      rating: 5,
      comment: "This product is amazing! High quality and excellent performance.",
    },
    {
      username: "Jane Smith",
      rating: 4,
      comment: "Great product, but the delivery was a bit slow.",
    },
    {
      username: "Alice Johnson",
      rating: 3,
      comment: "The product is decent, but could be better.",
    },
  ];

  return (
    <main className="bg-white border-[1px] border-borderColor rounded-lg  md:w-[880px]  h-[618px] w-[350px] md:ms-20 py-[70px] p-6 space-y-6">
      <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mt-4 lg:mt-6">
        Customer Reviews
      </h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border border-borderColor rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
              <span className="text-lg font-medium text-gray-700">
                {review.username}
              </span>
              <div className="flex mt-2 sm:mt-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    {i < review.rating ? <IoStar /> : <IoStarOutline />}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
