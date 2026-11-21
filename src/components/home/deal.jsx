
import React from 'react'
import Banner from '../../assets/image/banner_deals.png'
import { Link } from 'react-router-dom'

const Deals = () => {
  return (
    <section className="
      w-full
      relative
      overflow-hidden
      isolate
      rounded-xl
      min-h-[260px]
      sm:min-h-[230px]
      md:min-h-[210px]
      lg:min-h-0
      lg:aspect-[7.35/1]
    ">

      {/* Background Image */}
      <img
        src={Banner}
        alt="تخفیف ویژه فروش موتر"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          lg:object-center
          -z-20
        "
      />

      {/* Dark Overlay */}
      <div className="
        absolute inset-0
        bg-black/20
        -z-10
      " />

      

      {/* Content */}
      <div className="
        relative
        w-full h-full
        mt-13 lg:mt-0
        lg:min-h-0
        flex flex-col
        md:flex-row
        items-center
        justify-center
        md:justify-between
        gap-4
        px-5
        sm:px-8
        md:px-10
        lg:px-[5%]
        py-6
        md:py-4
      ">
      
      

        

        {/* Discount Text */}
        <div className="
          flex flex-col
          items-center
          md:items-start
          text-center
          md:text-right
          order-1
          md:order-2
          flex-1
          relative
          w-full
        ">

          {/* Badge */}
          <span className="
            bg-red-600
            text-white
            font-Vazirmatn-Bold
            text-xs
            sm:text-xl
            -rotate-6
            px-4
            py-1.5
            rounded-lg
            mb-2
            absolute top-0 md:-top-8 lg:top-0 left-0 md:left-[40%] xl:left-[60%]
          ">
            تخفیف ویژه
          </span>

          {/* Main Heading */}
          <h2 className="
            font-Vazirmatn-Black
            text-white
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            leading-tight
            whitespace-nowrap
          ">
            تا <span className="text-red-500">20%</span> تخفیف
          </h2>

          {/* Description */}
          <p className="
            font-Vazirmatn-Medium
            text-white
            text-sm
            sm:text-base
            md:text-lg
            mt-2
          ">
            فرصت را از دست ندهید!
          </p>

        </div>

        {/* CTA Button */}
        <Link
          to="/deals"
          className="
            order-2
            md:order-1
            shrink-0
            inline-flex
            items-center
            justify-center
            gap-2
            bg-red-600
            hover:bg-red-700
            text-white
            font-Vazirmatn-Bold
            text-sm
            sm:text-base
            px-5
            sm:px-7
            py-3
            rounded-full
            shadow-lg
            shadow-red-600/30
            transition-all
            duration-300
            hover:scale-105
          "
        >
          همین حالا خرید کنید
          <span aria-hidden="true">←</span>
        </Link>


        
      </div>
    </section>
  )
}

export default Deals
