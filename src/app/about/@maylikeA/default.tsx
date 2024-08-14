const list = [
    {
        pic: "recom (1).jpg",
        name: "Men Blazers Sets",
        name2: "Elegant Formal",
        price: "$7.00 - $99.50"
    },
    {
        pic: "recom (4).jpg",
        name: "Polo Shirt",
        name2: "Casual Contrast",
        price: "$15.00 - $45.00"
    },
    {
        pic: "recom (2).jpg",
        name: "Polo Short",
        name2: "Classic Blue",
        price: "$20.00 - $50.00"
    },
    {
        pic: "recom (3).jpg",
        name: "Gray Coat",
        name2: "Winter Collection",
        price: "$80.00 - $150.00"
    },
    {
        pic: "recom (5).jpg",
        name: "Blue Bag",
        name2: "Leather Luxury",
        price: "$25.00 - $60.00"
    }
  ];
  import Image from 'next/image';
  export default function maylikeA(){
    return(
       <main className="bg-white h-[553px] md:w-[282px] w-[90%] ms-5 md:ms-0 p-6 border-[1px] border-borderColor rounded-lg space-y-3">
         <h1 className="font-semibold">You may like</h1>
        <div className="space-y-4">
            {
                list.map((item,index)=>(
                    <div className="md:w-[242px] w-[320px] ms-5 md:ms-0 h-[80px] flex items-start gap-4 justify-start cursor-pointer " key={index}>
                    <div><img src={`/${item.pic}`} alt="" className="size-[80px] border-[1px] border-borderColor rounded-lg hover:border-gray-400  " /></div>
                    <div>
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