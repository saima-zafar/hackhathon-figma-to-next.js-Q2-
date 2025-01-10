import React from 'react'
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import { FaStar } from "react-icons/fa";

interface Data{
  id: number;
  img: string;
  date: string;
  title: string;
}
interface Data1{
  id: number;
  img:string;
  title:string;
  review:number;
}
const Rightside = () => {
   const data:Data[] =[
    {
      id: 1,
     img: "/Images/la1.png",
     date: "June 22, 2020",
     title: "Lorem ipsum dolor sit cingelit, sed do.",
    },
    {
      id: 2,
     img: "/Images/la2.png",
     date: "June 22, 2020",
     title: "Lorem ipsum dolor sit cingelit, sed do.",
    },
    {
      id: 3,
     img: "/Images/la.png",
     date: "June 22, 2020",
     title: "Lorem ipsum dolor sit cingelit, sed do.",
    },
    {
      id: 4,
     img: "/Images/la4.png",
     date: "June 22, 2020",
     title: "Lorem ipsum dolor sit cingelit, sed do.",
    }
   ]
   const data1:Data1[] = [
    {
      id: 1,
      img:"/Images/ch0.png",
      title:"Chicken Fry",
      review:26
    },
    {
      id: 2,
      img:"/Images/ch0.png",
      title:"Burger Food",
      review:46
    },
    {
      id: 3,
      img:"/Images/ch0.png",
      title:"Pizza",
      review:16
    },
    {
      id: 4,
      img:"/Images/ch0.png",
      title:"Fresh Fruit",
      review:36
    },
    {
      id: 5,
      img:"/Images/ch0.png",
      title:"Vegetables",
      review:16
    },
   ] 
  return (
    <div className='md:max-w-[424px] w-full my-16 h-fit px-8'>
      <button className='flex justify-between md:max-w-[422px] w-full my-4 border-gray-300 border-[2px] h-[70px] rounded-[6px]'><input type="text" placeholder='Search your keyword..' className='pl-5 pt-5' /><span className='w-[76px] h-[65px] bg-[#FF9F0D] text-[#ffffff] p-2'><CiSearch size={24} className='ml-4 mt-4' />
      </span></button>
      {/* second div */}
      <div className='md:max-w-[424px] w-full h-[423px] px-8 mb-4 border-2 border-gray-300'>
            <div className='w-[322px] h-[357px] space-y-2'>
                <Image src="/images/cl11.png" alt="client" width={148} height={130} className="mx-[80px] mt-2" />
                <h2 className='text-center text-[20px] font-bold'> Prince Miyako</h2>
                <p className='text-center text-[#828282]'>Blogger/Photographer</p>
                <p className='flex gap-4 justify-center'>
                    <span className='flex gap-1 mt-1'>
                        <FaStar size={14} className='text-[#FF9F0D]'/>
                        <FaStar size={14} className='text-[#FF9F0D]'/>
                        <FaStar size={14} className='text-[#FF9F0D]'/>
                        <FaStar size={14} className='text-[#FF9F0D]'/>
                        <FaStar size={14} className='text-[#FF9F0D]'/>
                    </span>
                    <span className='text-[#828282]'>
                      (1 Review)
                    </span>
                </p>
                <p className='w-[300px] text-center'>Lorem ipsum dolor sit amet, consectetur
adipisicing elit.Veritatis distinctio, odio
eligendi suscipit reprehenderit atque</p>
<span className=''></span>
            </div>
      </div>
      {/* third div */}
      <div className='md:max-w-[423px] h-[593px] w-full border-2 border-gray-300'>
        <div className='text-[20px] font-bold mx-8 mt-6'>Recent Post</div>
        {data.map((item) => (
          <div key={item.id} className='flex mt-2 flex-col mx-4 border-b-2 border-gray-300 md:flex-row gap-4 p-4 '>
            <Image src={item.img} alt='item.data' width={ 99} height={92} className=' w-[99px] h-[92px] rounded-md' />
          <div>
            <p className='opacity-40'>{item.date}</p>
            <p>{item.title}</p>
          </div>
          </div>
        ))}
         </div>
         {/* Forth div */}
         <div className='md:max-w-[423px] h-[750px] mt-8 w-full border-2 border-gray-300'>
        <div className='text-[20px] font-bold mx-8 mt-6'>Filter By Menu</div>
        {data1.map((item) => (
          <div key={item.id} className='flex justify-between mt-2 flex-col mx-4  md:flex-row gap-4 p-4 '>
            <div className='flex gap-4'>
            <Image src={item.img} alt='item.data' width={ 99} height={92} className=' w-[99px] h-[92px] rounded-md' />
          
            <h2 className='font-bold text-[16px] mt-8'>{item.title}</h2>
            </div>
            <p className='mt-8 font-semibold'>{item.review}</p>

          </div>
        ))}
         </div>
    </div>
  )
}

export default Rightside