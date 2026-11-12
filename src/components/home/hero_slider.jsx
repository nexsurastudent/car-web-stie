import React from 'react'
import HeroSlider from '../../assets/image/hero_slider.png'
import HeroFooter from '../../assets/image/hero_footer.svg'
import Search_hero from './search_hero'

const Hero_slider = () => {
  return (
    <div className='w-full h-screen lg:h-140 bg-red-500 relative overflow-hidden after:content-[""] after:w-full after:h-full after:bg-black/70 after:absolute after:top-0 after:left-0'>
        <img src={HeroSlider} className='w-full h-full object-cover' alt="" />
        <img src={HeroFooter} className='w-full -translate-y-4 scale-150  relative z-20' alt="" />
        <div className='w-full md:w-fit absolute top-16 left-0 md:left-20 z-10 p-10 lg:p-0'>
            <h1 className='font-Vazirmatn-Black text-white text-5xl md:text-7xl md:leading-25'>
                <span className='lg:-translate-x-30 flex'>موتـر رویـایـی خـود را  </span>
                
                <span className='text-red-500 '>با بهترین قیمت پیدا کنید!</span>
            </h1>
            <p className='text-white font-Vazirmatn-Medium lg:text-3xl mt-5'>تنوع بی نظیر موترها،قمیت های مناسب و خرید مطمئن</p>
        <div className='w-full lg:w-180 mt-9'>
            <Search_hero />
        </div>
        </div>
    </div>
  )
}

export default Hero_slider