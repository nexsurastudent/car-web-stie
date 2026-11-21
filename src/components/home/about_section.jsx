import React from 'react'
import Banner from '../../assets/image/about_banner_bg.png'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";



const About_section = () => {
  return (
    <div className='relative'>
        <img src={Banner} alt="درباره اتومارکت" />
        <div className='w-full xl:w-6/10 xl:h-full xl:absolute left-0 top-0 flex items-end justify-end xl:pl-6'>
            <div className='xl:bg-gradient-to-r xl:border border-gray-200 from-background from-80% to-[#f5f7fa49] rounded-md py-5 px-2.5 w-full xl:w-7/10'>
              <h2 className='font-Vazirmatn-Black text-3xl xl:-translate-y-10'>درباره ما</h2>
              <p className='font-Vazirmatn-Regular leading-5 font-bold text-sm pr-5'>
                  ما در <strong className='text-red-500'>AutoMarket</strong> با هدف ارئه بهرین موتر ها 
                  و خدمات حرفه ای، در کنار شما هستیم تا تجربه ای
                  بی نظیر از خرید موتر را تجربه کنید.
              </p>
              <Link 
                to="/about" 
                className="group xl:mx-auto mt-5 w-fit flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white rounded-full px-7 py-4 text-sm font-Vazirmatn-Medium font-bold shadow-lg shadow-red-500/30 transition-all duration-300"
              >
                <span>بیشتر بدانید</span>
                <FaArrowLeftLong className="transition-transform duration-300 group-hover:-translate-x-1.5" />
              </Link>
            </div>
        </div>
    </div>
  )
}

export default About_section