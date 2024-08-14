"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeadingDetail() {
    const pathname = usePathname();

    return (
        <main className="absolute bg-white md:w-[880px] w-[350px] h-[70px] md:ms-20 border-b-[1px] border-borderColor">
            <ul className="flex md:gap-10 gap-3 text-gray-500 items-center p-6 md:text-[20px] text-[16px]">
                <li className={`${pathname === "/about/description" ? "text-blue underline underline-offset-[28px] md:underline-offset-[22px]" : ""}`}>
                    <Link href="/about/description">Description</Link>
                </li>
                <li className={`${pathname === "/about/reviews" ? "text-blue underline underline-offset-[28px] md:underline-offset-[22px]" : ""}`}>
                    <Link href="/about/reviews">Reviews</Link>
                </li>
                <li className={`${pathname === "/about/shipping" ? "text-blue underline underline-offset-[28px] md:underline-offset-[22px]" : ""}`}>
                    <Link href="/about/shipping">Shipping</Link>
                </li>
                <li className={`${pathname === "/about/aboutseller" ? "text-blue underline underline-offset-[28px] md:underline-offset-[22px]" : ""}`}>
                    <Link href="/about/aboutseller">
                    <span className="md:hidden">Seller</span>
                    <span className="hidden md:block">About Seller</span></Link>
                </li>
            </ul>
        </main>
    );
}
