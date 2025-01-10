import React from 'react';
import { IoPlayOutline } from "react-icons/io5";
import Link from 'next/link';

const Hero2 = () => {
  return (
    <div className="bg-[url('/images/h5.png')] bg-cover bg-center w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-end px-4 sm:px-8 lg:px-16">

      <div className="text-right text-white max-w-full sm:max-w-[705px] lg:max-w-[705px]">
        <p className="font-greatvibes text-[20px] sm:text-[24px] md:text-[32px] text-orange-500 mb-4">
          Restaurant Active Process
        </p>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
          <span className='text-[#FF9F0D]'>we</span> Document Every Food
          Bean Process until it is saved
        </h2>
        <p className='font-inter text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] max-w-full sm:max-w-[651px] leading-relaxed mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna.
        </p>
        <div className="flex justify-end gap-4">
          <Link href="/faq">
            <button className="w-[150px] sm:w-[190px] h-[50px] sm:h-[60px] text-center border-[#FF9F0D] text-white border-[1px] rounded-[25px] text-lg">
              Show More
            </button>
          </Link>
          <button className="flex items-center gap-2 text-[#ffffff] text-lg">
            <IoPlayOutline className="text-[#FF9F0D]" />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
