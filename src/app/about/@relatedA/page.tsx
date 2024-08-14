const list = [
    {
        pic: "detail pic (6).jpg",
        name: "Men Blazers Sets",
        name2: "Elegant Formal",
        price: "$7.00 - $99.50"
    },
    {
        pic: "detail pic (4).jpg",
        name: "Polo Shirt",
        name2: "Casual Contrast",
        price: "$15.00 - $45.00"
    },
    {
        pic: "detail pic (2).jpg",
        name: "Polo Short",
        name2: "Classic Blue",
        price: "$20.00 - $50.00"
    },
    {
        pic: "detail pic (3).jpg",
        name: "Gray Coat",
        name2: "Winter Collection",
        price: "$80.00 - $150.00"
    },
    {
        pic: "detail pic (5).jpg",
        name: "Blue Bag",
        name2: "Leather Luxury",
        price: "$25.00 - $60.00"
    },
    {
        pic: "detail pic (1).jpg",
        name: "Blue Bag",
        name2: "Leather Luxury",
        price: "$28.00 - $60.00"
    }
  ];
  import Image from 'next/image';
  export default function relatedA(){
    return(
       <main className="bg-white md:h-[350px]  md:w-[1180px] w-[100%] md:p-6 border-[1px] border-borderColor rounded-lg space-y-3 md:mx-20 py-5 md:py-0">
         <h1 className="font-semibold ps-5">Related Products</h1>
        <div className="grid md:grid-cols-6 gap-5 grid-cols-2 justify-items-center p-4 md:p-0">
            {
                list.map((item,index)=>(
                    <div className="md:w-[172px] w-[100%] md:h-[254px] h-[100%] items-start gap-4 justify-start cursor-pointer bg-gray-200 md:border-none border-[2px] border-gray-400 md:bg-white rounded-lg " key={index}>
                    <div ><img src={`/${item.pic}`} alt="" className="md:size-[172px] size-[100%] bg-gray-200  border-[1px] border-borderColor rounded-lg hover:border-gray-400  " /></div>
                    <div className="space-y-1 mt-2">
                        <p>{item.name}</p>
                        <p>{item.name2}</p>
                        <p className="text-gray-500">{item.price}</p>
                    </div>
                 </div>
                ))
            }
        </div>
       </main>
    )
  }