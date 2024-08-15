"use client"
import Image from 'next/image';
import { useState } from 'react';
import { IoMdStar, IoMdStarHalf, IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const detaillist = [
  {
    pic: "detail pic (1).jpg",
    name: "Canon Camera EOS 2000, Black 10X zoom",
    price: "$998.00",
    price2: "$1128.00",
    rating: "7.5",
    orders: "154 orders",
    p1: "This product is known for its reliability and durability, offering ",
    p2: "advanced features that meet the needs of modern consumers.",
  },
  {
      pic: "detail pic (2).jpg",
    name: "Nikon D5600 DSLR Camera, 18-55mm Lens Kit",
    price: "$749.00",
    price2: "$849.00",
    rating: "8.2",
    orders: "200 orders",
    p1: "Capture every moment in stunning detail with this Nikon camera, ",
    p2: "featuring an easy-to-use interface and long battery life.",
  },
  {
      pic: "detail pic (3).jpg",
    name: "Sony Alpha A6000 Mirrorless Camera with 16-50mm Lens",
    price: "$598.00",
    price2: "$698.00",
    rating: "8.7",
    orders: "300 orders",
    p1: "Compact and powerful, the Sony Alpha A6000 is perfect for travel, ",
    p2: "offering high-speed shooting and exceptional image quality.",
  },
  {
      pic: "detail pic (4).jpg",
    name: "Fujifilm X-T30 Mirrorless Digital Camera",
    price: "$899.00",
    price2: "$999.00",
    rating: "8.5",
    orders: "120 orders",
    p1: "Designed for enthusiasts, the Fujifilm X-T30 provides advanced features ",
    p2: "and a vintage design, perfect for creative photography.",
  },
  {
      pic: "detail pic (5).jpg",
    name: "GoPro HERO9 Black 5K Action Camera",
    price: "$399.00",
    price2: "$449.00",
    rating: "9.0",
    orders: "450 orders",
    p1: "Capture adventures in stunning 5K with the GoPro HERO9, ",
    p2: "designed to withstand the most extreme conditions.",
  },
  {
      pic: "detail pic (6).jpg",
    name: "Panasonic Lumix G7 4K Mirrorless Camera",
    price: "$497.99",
    price2: "$597.99",
    rating: "7.8",
    orders: "180 orders",
    p1: "Experience professional-grade 4K video and photo capture with the ",
    p2: "Panasonic Lumix G7, ideal for videographers and photographers.",
  },
];

export default function Electronics() {
    const [products, setProducts] = useState(detaillist.map(product => ({ ...product, liked: false })));

    const toggleLike = (index:Number) => {
        const updatedProducts = products.map((product, i) => {
            if (i === index) {
                return { ...product, liked: !product.liked };
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    return (
        <main>
            <div className=" hidden h-[1450px] mt-8 w-[920px]  md:flex flex-col items-center ">
            <div className="space-y-3  flex flex-col items-center">
                {products.map((item, index) => (
                    <div className="relative h-[230px]  w-[920px]  border-[1px] border-borderColor rounded-lg bg-white py-5  px-8 flex items-start gap-10" key={index}>
                        <div>
                            <img src={`/${item.pic}`} alt="" className="size-[184px] " />
                        </div>
                        <div className="space-y-2">
                            <p className="text-[16px] text-dark font-medium">{item.name}</p>
                            <div className="flex items-center gap-2">
                                <p className="text-[20px] font-semibold">{item.price}</p>
                                <p className="text-[16px] text-gray-500 font-semibold line-through">{item.price2}</p>
                            </div>
                            <div className="flex items-center gap-2 text-[16px] ">
                                <ul className="flex text-orange">
                                    <li><IoMdStar /></li>
                                    <li><IoMdStar /></li>
                                    <li><IoMdStar /></li>
                                    <li><IoMdStar /></li>
                                    <li><IoMdStarHalf /></li>
                                </ul>
                                <p className="text-orange">{item.rating}</p>
                                <span className="size-2 rounded-full bg-gray-300"></span>
                                <p className="text-gray-500">{item.orders}</p>
                                <span className="size-2 rounded-full bg-gray-300"></span>
                                <p className="text-green">Free Shipping</p>
                            </div>
                            <div className=" block  text-gray-600">
                                <p>{item.p1}</p><p>{item.p2}</p>
                            </div>
                            <div className="text-blue font-medium">View details</div>
                        </div>
                        <div className="size-[40px] border-[1px] border-borderColor rounded-lg bg-white shadow-md mid text-[24px] text-blue top-9 right-3 absolute cursor-pointer" onClick={() => toggleLike(index)}>
                            {item.liked ? <IoMdHeart color="blue" /> : <IoMdHeartEmpty />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="md:hidden h-auto mt-8 w-[100%]  flex flex-col items-center ">
            <div className="space-y-3  flex flex-col items-center">
                {products.map((item, index) => (
                    <div className="relative   w-[90%]  border-[1px] border-borderColor rounded-lg bg-white py-5  px-8 flex items-start gap-10 flex-col " key={index}>
                        <div>
                            <img src={`/${item.pic}`} alt="" className="w-[150px] h-[150px]" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-[16px] text-dark font-medium">{item.name}</p>
                            <div className="flex items-center gap-2">
                                <p className="text-[20px] font-semibold">{item.price}</p>
                                <p className="text-[16px] text-gray-500 font-semibold line-through">{item.price2}</p>
                            </div>
                            <div className="flex items-center gap-2 text-[16px] ">
                                <ul className="flex text-orange">
                                    <li><IoMdStar /></li>
                                    <li><IoMdStar /></li>
                                    <li><IoMdStar /></li>
                                    <li><IoMdStar /></li>
                                    <li><IoMdStarHalf /></li>
                                </ul>
                                <p className="text-orange">{item.rating}</p>
                                <span className="size-2 rounded-full bg-gray-300"></span>
                                <p className="text-gray-500">{item.orders}</p>
                                <span className="size-2 rounded-full bg-gray-300"></span>
                                <p className="text-green">Free Shipping</p>
                            </div>
                            <div className="text-blue font-medium">View details</div>
                        </div>
                        <div className="size-[40px] border-[1px] border-borderColor rounded-lg bg-white shadow-md mid text-[24px] text-blue top-9 right-3 absolute cursor-pointer" onClick={() => toggleLike(index)}>
                            {item.liked ? <IoMdHeart color="blue" /> : <IoMdHeartEmpty />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </main>
    );
}
