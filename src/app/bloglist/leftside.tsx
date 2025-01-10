import React from 'react'
import { TbCalendarMonth } from "react-icons/tb";
import { BiMessageDetail } from "react-icons/bi";
import { LuCircleUserRound } from "react-icons/lu";




const Leftside = () => {
  return (
    <div className='md:max-w-[872px] my-16 px-8'>
        {/* first div */}
        <div className='md:max-w-[871px] h-[520px] bg-[url(/images/ab1.png)] bg-cover bg-center'>
        <button className='w-[60px] h-[60px] bg-[#FF9F0D] text-[#ffffff] rounded-[6px] ml-[20px] mt-[20px]'>14 Feb</button>
        </div>

            <p className='flex gap-2 my-6'><TbCalendarMonth size={24} className='text-[#FF9F0D]' />
            <span>Feb 14, 2022 /</span>
            <BiMessageDetail size={24} className='text-[#FF9F0D]' />
            <span> 3/ </span>
            <LuCircleUserRound size={24} className='text-[#FF9F0D]' />
            <span>Admin</span>
            </p>
            <h2 className='font-bold text-[24px] mb-6'>10 Reasons To Do A Digital Detox Challenge</h2>
            <p className='text-[16px] md:max-w-[678px] text-justify'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            <button className='w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[1px] my-8 px-8'>Read More </button>
        {/* second div */}
        <div className='md:max-w-[871px] h-[520px] bg-[url(/images/ab2.png)] bg-cover bg-center'>
        <button className='w-[60px] h-[60px] bg-[#FF9F0D] text-[#ffffff] rounded-[6px] ml-[20px] mt-[20px]'>14 Feb</button>
        </div>

            <p className='flex gap-2 my-6'><TbCalendarMonth size={24} className='text-[#FF9F0D]' />
            <span>Feb 14, 2022 /</span>
            <BiMessageDetail size={24} className='text-[#FF9F0D]' />
            <span> 3/ </span>
            <LuCircleUserRound size={24} className='text-[#FF9F0D]' />
            <span>Admin</span>
            </p>
            <h2 className='font-bold text-[24px] mb-6'>Traditional Soft Pretzels with Sweet Beer Cheese</h2>
            <p className='text-[16px] md:max-w-[678px] text-justify'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            <button className='w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[1px] my-8 px-8'>Read More </button>
{/* third div */}
            <div className='md:max-w-[871px] h-[520px] bg-[url(/images/ab3.png)] bg-cover bg-center'>
        <button className='w-[60px] h-[60px] bg-[#FF9F0D] text-[#ffffff] rounded-[6px] ml-[20px] mt-[20px]'>14 Feb</button>
        </div>

            <p className='flex gap-2 my-6'><TbCalendarMonth size={24} className='text-[#FF9F0D]' />
            <span>Feb 14, 2022 /</span>
            <BiMessageDetail size={24} className='text-[#FF9F0D]' />
            <span> 3/ </span>
            <LuCircleUserRound size={24} className='text-[#FF9F0D]' />
            <span>Admin</span>
            </p>
            <h2 className='font-bold text-[24px] mb-6'>The Ultimate Hangover Burger: Egg in a Hole Burger</h2>
            <p className='text-[16px] md:max-w-[678px] text-justify'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            <button className='w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[1px] my-8 px-8'>Read More </button>
           {/* fourth div */}
            <div className='md:max-w-[871px] h-[520px] bg-[url(/images/ab4.png)] bg-cover bg-center'>
        <button className='w-[60px] h-[60px] bg-[#FF9F0D] text-[#ffffff] rounded-[6px] ml-[20px] mt-[20px]'>14 Feb</button>
        </div>

            <p className='flex gap-2 my-6'><TbCalendarMonth size={24} className='text-[#FF9F0D]' />
            <span>Feb 14, 2022 /</span>
            <BiMessageDetail size={24} className='text-[#FF9F0D]' />
            <span> 3/ </span>
            <LuCircleUserRound size={24} className='text-[#FF9F0D]' />
            <span>Admin</span>
            </p>
            <h2 className='font-bold text-[24px] mb-6'>My Favorite Easy Black Pizza Toast Recipe</h2>
            <p className='text-[16px] md:max-w-[678px] text-justify'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            <button className='w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[1px] my-8 px-8'>Read More </button>

    </div>
  )
}

export default Leftside