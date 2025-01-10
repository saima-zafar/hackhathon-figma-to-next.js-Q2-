import React from 'react'
import Hero from './components/hero'
import Hero2 from './components/hero2'
import Hero1 from './components/hero1'

 export default function Home() {
  return (
    <div className='md:max-w-[1920px]'>
      <Hero />
      <Hero1 />
      <Hero2 />
      
      
    </div>
  ) 
}
