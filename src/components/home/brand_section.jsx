import React from 'react'
import Benze from '../../assets/image/Benze.png'
import BMW from '../../assets/image/BMW.webp'
import Honda from '../../assets/image/Honda.jpg'
import Lexus from '../../assets/image/lexus.png'
import Toyota from '../../assets/image/toyota.jpg'

const Brand_section = () => {
  const Brands = [
    { id: 1, image: Toyota, title: 'تویوتا' },
    { id: 2, image: Benze, title: 'بنز' },
    { id: 3, image: BMW, title: 'بی‌ام‌و' },
    { id: 4, image: Honda, title: 'هیوندای' },
    { id: 5, image: Lexus, title: 'لکسوس' },
  ]

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 relative after:content-[''] after:hidden lg:after:block after:w-1 after:h-8/10 after:bg-red-500 after:absolute after:top-[20%] after:right-0 after:rounded-full">
      {/* بخش تیتر هماهنگ با کل سایت */}
      <div className="mb-4 overflow-hidden flex items-center justify-center gap-4">
        <div className="hidden sm:flex items-center">
          <span className="w-24 md:w-36 h-[3px] bg-gradient-to-r from-red-600 to-transparent rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-red-600 rounded-full -mr-1"></span>
        </div>

        <h2 className="font-Vazirmatn-Black text-2xl sm:text-3xl text-zinc-900 dark:text-white flex items-center justify-center gap-2.5 whitespace-nowrap">
          <span>برندهای محبوب</span>
        </h2>

        <div className="hidden sm:flex items-center">
          <span className="w-2.5 h-2.5 bg-red-600 rounded-full -ml-1"></span>
          <span className="w-24 md:w-36 h-[3px] bg-gradient-to-l from-red-600 to-transparent rounded-full"></span>
        </div>
      </div>

      {/* گرید کارت‌های برند */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {Brands.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 flex flex-col items-center justify-center gap-3 shadow-sm hover:shadow-xl hover:shadow-red-500/10 hover:border-red-500/40 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* هاله نور قرمز ملایم در پس‌زمینه هنگام هاور */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* تصویر لوگو با object-contain تا لوگو برش نخورد */}
            <div className="relative z-10 h-16 sm:h-20 w-full flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            </div>

            {/* خط قرمز ظریف پایین کارت هنگام هاور */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-red-600 rounded-t-full group-hover:w-1/2 transition-all duration-300"></span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brand_section
