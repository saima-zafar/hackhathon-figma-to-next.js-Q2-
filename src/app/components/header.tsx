import Link from 'next/link'
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { Sheet } from '@/components/ui/sheet';
import { BsHandbag } from "react-icons/bs";
import { SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { GiHamburger } from 'react-icons/gi';



const Header = () => {
  return (
    <div className='md:max-w-[1920px] bg-black'>
      <div className='flex justify-between items-center h-[90px] w-full px-8'>
       
       <div className='flex items-center'>
        <h1 className='font-bold text-2x1 text-white'>Food</h1>
        <span className='font-bold text-2x1 text-[#FF9F0D]'>tuck</span>
       </div>
       <nav className='hidden md:flex space-x-6'>
        <Link href="/" className='text-lg font-bold text-[#FF9F0D]'>Home</Link>
        <Link href="/menu" className='text-lg font-bold text-white'>Menu</Link>
        <Link href="/bloglist" className='text-lg font-bold text-white'>Blog</Link>
        <Link href="/chef" className='text-lg font-bold text-white'>Pages</Link>
        <Link href="/about" className='text-lg font-bold text-white'>About</Link>
        <Link href="/shop" className='text-lg font-bold text-white'>Shop</Link>
        <Link href="/404error" className='text-lg font-bold text-white'>Contact</Link>
        </nav> 

       <Sheet> 
       <SheetTrigger>
        <GiHamburger size={24} className='text-white'/>
       </SheetTrigger>
        <SheetContent className='p-6'>
          <nav className='space-y-4'>
          <Link href="/" className='text-lg font-bold text-[#FF9F0D]'>Home</Link>
        <Link href="/menu" className='text-lg font-bold text-black block'>Menu</Link>
        <Link href="/blog" className='text-lg font-bold text-black block'>Blog</Link>
        <Link href="/chef" className='text-lg font-bold text-black block'>Pages</Link>
        <Link href="/about" className='text-lg font-bold text-black block'>About</Link>
        <Link href="/shop" className='text-lg font-bold text-black block'>Shop</Link>
        <Link href="/404error" className='text-lg font-bold text-black block'>Contact</Link>
          </nav>
        </SheetContent>
       </Sheet>


       <div className='flex items-center space-x-4'>
       <IoIosSearch size={24} className='text-white'/>
       <Link href="/signup"><AiOutlineUser size={24} className='text-white' /></Link>
       <BsHandbag size={24} className='text-white'/> 
       

       </div>
      </div>
    </div>  
  
  )
}

export default Header
