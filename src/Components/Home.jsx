import React from 'react'
import { Carousel } from "flowbite-react";
import banner1 from "../assets/Illustration.png"
import banner2 from "../assets/hero1.png"
import banner3 from "../assets/hero2.png"




const Home = () => {
  return (
    <div className='bg-neutralsliver' id='home'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>

        <Carousel className='w-full mx-auto '>
          <div className="my-7 md:my-8  py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 cursor-default">
            <div className='lg:mx-28 md:mb-11'><img width={285} src={banner1} alt="" /></div>
            <div className='md:w-1/2'>
              <h1 className='md:text-4xl text-3xl  font-semibold mb-3 text-neutralGray md:w-3/4 leading-snug '>Lessons and insights
                <span className='leading-snug text-brandPrimary'> from 8 years</span></h1>
              <p className='text-neutralGray text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
              <button className='px-7 py-2 bg-brandPrimary rounded hover:bg-neutralGray
              transition-all duration-300 hover:-translate-y-4'>Register</button>
            </div>
          </div>
          <div className="my-8 md:my-8  py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 cursor-default">
            <div  className='lg:mx-28 md:mb-11'><img  width={285} src={banner2} alt="" /></div>
            <div className='md:w-1/2'>
              <h1 className='md:text-4xl text-3xl font-semibold mb-3 text-neutralGray md:w-3/4 leading-snug '>Lets Learn and Earn Money
                <span className='leading-snug text-brandPrimary'> in 4 Months</span></h1>
              <p className='text-neutralGray text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
              <button className='px-7 py-2 bg-brandPrimary rounded hover:bg-neutralGray
              transition-all duration-300 hover:-translate-y-4'>Register</button>
            </div>
          </div>
          <div className="my-8 md:my-8  py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 cursor-default">
            <div  className='lg:mx-28 md:mb-11'><img width={285} src={banner3} alt="" /></div>
            <div className='md:w-1/2'>
              <h1 className='md:text-4xl text-3xl font-semibold mb-3 text-neutralGray md:w-3/4 leading-snug '>Lessons and insights
                <span className='leading-snug text-brandPrimary'>from 8 years</span></h1>
              <p className='text-neutralGray text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
              <button className='px-7 py-2 bg-brandPrimary rounded hover:bg-neutralGray
              transition-all duration-300 hover:-translate-y-4'>Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>

  )
}

export default Home