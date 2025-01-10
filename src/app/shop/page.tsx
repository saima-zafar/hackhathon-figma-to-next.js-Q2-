import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

interface Data {
  id: number;
  img: string;
  title: string;
  price: string;
}

const data: Data[] = [
  { id: 1, img: "/images/sh1.png", title: "Fresh Lime", price: "$45.00" },
  { id: 2, img: "/images/sh2.png", title: "Drink", price: "$23.00" },
  { id: 3, img: "/images/sh3.png", title: "Pizza", price: "$43.00" },
  { id: 4, img: "/images/sh4.png", title: "Cheese Butter", price: "$10.00" },
  { id: 5, img: "/images/sh5.png", title: "Sandwiches", price: "$25.00" },
  { id: 6, img: "/images/sh6.png", title: "Chicken Chup", price: "$25.00" },
  { id: 7, img: "/images/sh1.png", title: "Fresh Lime", price: "$45.00" },
  { id: 8, img: "/images/sh2.png", title: "Drink", price: "$23.00" },
  { id: 9, img: "/images/sh3.png", title: "Pizza", price: "$43.00" },
  { id: 10, img: "/images/sh4.png", title: "Cheese Butter", price: "$10.00" },
  { id: 11, img: "/images/sh5.png", title: "Sandwiches", price: "$25.00" },
  { id: 12, img: "/images/sh6.png", title: "Chicken Chup", price: "$25.00" },
  { id: 13, img: "/images/sh1.png", title: "Fresh Lime", price: "$45.00" },
  { id: 14, img: "/images/sh2.png", title: "Drink", price: "$23.00" },
  { id: 15, img: "/images/sh3.png", title: "Pizza", price: "$43.00" }
];

const Ourshop = () => {
  return (
    <>
      <section
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      >
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">Our Shop</h2>
          <p className="pt-2">
            <Link href="/" className="text-yellow-400">Home</Link> › Shop
          </p>
        </div>
      </section>

      <div className="container mt-32 mb-16 flex flex-col md:flex-row gap-8 mx-auto px-4">
        <div className="md:w-[984px] w-full">
          <div className="flex flex-col md:flex-row gap-3 ml-4 w-[317px]">
            <div className="flex w-[332px]">
              <label htmlFor="Sort By" className="mt-2 text-[20px] w-[81px]">Sort By</label>
              <select className="opacity-30 rounded border border-gray-400 w-[236px] text-[18px] h-12">
                <option value="Newest">Newest</option>
              </select>
            </div>

            <div className="flex md:w-[236px] gap-2">
              <label htmlFor="Show" className="mt-2 text-[20px] w-[64px]">Show</label>
              <select className="opacity-30 rounded border border-gray-400 md:w-[236px] text-[18px] h-12">
                <option value="Default">Default</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
            {data.map((item) => (
              <div key={item.id} className="shadow-md p-4 w-full m-4 rounded-lg">
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={312}
                    height={267}
                    className="w-full"
                  />
                </Link>
                <h2 className="text-xl font-bold p-2 ">{item.title}</h2>
                <p className="text-gray-600 pl-2">{item.price}</p>
                <Link href={`/products/${item.id}`}>
                  <button className="mt-2 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                    Show Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
          <Image
            src="/images/bar1.png"
            alt="bar"
            width={306}
            height={51}
            className="md:ml-[32%] ml-[10%] mt-10"
          />
        </div>

        {/* right side */}
        <div className="w-[312px] md:h-[418px]">
          <div className="flex w-[248px] h-[46px] mt-[72px] text-center ">
            <input
              type="text"
              placeholder="Search Product"
              className="w-[202px] bg-[#ebe2d5] pl-4 text-gray-400"
            />
            <CiSearch
              size={20}
              className="bg-[#FF9F0D] p-3 text-[#FFFFFF] w-[46px] h-[46px]"
            />
          </div>

          {/* Additional content here */}
        </div>
      </div>
    </>
  );
};

export default Ourshop;
