import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero1 = () => {
  return (
    <div className="flex flex-col sm:flex-row h-auto sm:h-[px] px-4 sm:px-8 lg:px-16 gap-8 bg-black">
      {/* Text Section */}
      <div className="text-black sm:max-w-1/2 w-full sm:mb-16 gap-4 sm:pr-8 sm:my-0 my-[40px] pl-0 sm:mt-[110px]">
        <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-greatvibes sm:w-[91px] w-full font-normal text-[#FF9F0D] whitespace-nowrap sm:ml-14">
          About us
        </p>
        <h2 className="font-bold font-helvetica sm:text-[40px] text-[30px] sm:pl-[50px] pl-5 sm:w-[446px] leading-[56px] text-[#FFFFFF]">
          <span className="text-[#FF9F0D]">We</span> Create the best foody product
        </h2>
        <p className="text-[#FFFFFF] font-inter font-normal sm:text-[16px] sm:leading-[24px] w-full sm:w-[526px] px-5 sm:pl-[59px] md:my-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <p className="font-inter text-white my-[20px] sm:pl-[59px] px-5">
          ✔ Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <p className="font-inter text-white my-[20px] sm:pl-[59px] px-5">
          ✔ Quisque diam pellentesque bibendum non dui volutpat fringilla
        </p>
        <p className="font-inter text-white my-[20px] sm:pl-[59px] px-5">
          ✔ Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <Link href="/about">
          <button className="rounded-[30px] sm:h-[60px] h-[50px] sm:ml-[64px] px-5 mx-4 sm:w-[180px] w-[160px] mt-1 bg-[#FF9F0D] text-[#FFFFFF]">
            Read More
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="space-y-4 sm:p-5 w-full sm:mb-12 sm:w-1/2 object-cover mt-8">
        <div className="sm:flex sm:-row sm:gap-[12px] sm:mt-[110px] sm:mr-[60px] gap-[12px] sm:flex-col">
          {/* Main Hero Image */}
          <div className="sm:max-w-[660px] w-full">
            <Image
              src="/images/h2.png"
              width={660}
              height={330}
              alt="hero-egg"
              className="rounded-[6px] object-cover sm:h-[400px] h-[300px] w-full"
            />
          </div>

          {/* Small Hero Images */}
          <div className="flex sm:max-w-[660px] sm:flex-row sm:flex-wrap gap-[12px] sm:mb-0 mb-[30px] w-full">
            <div className="w-full sm:w-[320px]">
              <Image
                src="/images/h3.png"
                width={322}
                height={194}
                alt="hero-egg"
                className="rounded-[6px] object-cover w-full sm:h-[250px] h-[180px]"
              />
            </div>
            <div className="w-full sm:w-[320px]">
              {/* <Image
                src="/images/h4.png"
                width={322}
                height={194}
                alt="hero-egg" */}
              {/* /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;