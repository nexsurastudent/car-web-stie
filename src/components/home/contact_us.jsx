import React from 'react';
import { Link } from 'react-router-dom';
import { LuPhoneCall } from "react-icons/lu";
import { FaLocationDot, FaArrowLeftLong } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

import Banner from '../../assets/image/testmonsioal.png';

const Contact_us = () => {
  return (
    <section dir="rtl" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        
        {/* ____ بخش راست: بنر فراخوان (CTA) ____ */}
        <div className="relative lg:col-span-5 min-h-[280px] sm:min-h-[340px] flex items-center overflow-hidden group">
          <img
            src={Banner}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            alt="بنر تماس با ما"
          />
          {/* لایه تیره گرادینت برای خوانایی عالی متن روی عکس */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-900/75 to-zinc-900/40" />

          <div className="relative z-10 p-7 sm:p-10 flex flex-col justify-center items-start w-full">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-Vazirmatn-Medium text-red-400 bg-red-500/15 border border-red-500/30 rounded-full backdrop-blur-sm">
              مشاوره رایگان خرید موتر
            </span>

            <h3 className="font-Vazirmatn-Black text-white text-2xl sm:text-3xl leading-snug">
              همین حالا با ما در تماس شوید!
            </h3>

            <p className="font-Vazirmatn-Regular text-zinc-300 text-sm sm:text-base mt-2 leading-relaxed">
              تیم متخصص ما آماده پاسخگویی و راهنمایی شما برای انتخاب بهترین موتر است.
            </p>

            <Link
              to="/contact"
              className="group/btn mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl inline-flex items-center gap-3 font-Vazirmatn-Medium text-sm sm:text-base shadow-lg shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>ارسال پیام و تماس</span>
              <FaArrowLeftLong className="transition-transform duration-300 group-hover/btn:-translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* ____ بخش چپ: راه‌های ارتباطی ____ */}
        <div className="lg:col-span-7 py-10 px-6 sm:px-10 flex flex-col justify-center bg-zinc-50/70 dark:bg-zinc-900/50">
          
          {/* عنوان بخش */}
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="hidden sm:flex items-center">
                <span className="w-16 h-[3px] bg-gradient-to-r from-red-600 to-transparent rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full -mr-1"></span>
              </div>

              <h2 className="font-Vazirmatn-Black text-2xl sm:text-3xl text-zinc-900 dark:text-white whitespace-nowrap">
                راه‌های ارتباط با ما
              </h2>

              <div className="hidden sm:flex items-center">
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full -ml-1"></span>
                <span className="w-16 h-[3px] bg-gradient-to-l from-red-600 to-transparent rounded-full"></span>
              </div>
            </div>
            <p className="font-Vazirmatn-Regular text-zinc-500 dark:text-zinc-400 text-sm mt-2">
              از طریق یکی از روش‌های زیر به صورت مستقیم با ما در ارتباط باشید
            </p>
          </div>

          {/* کارت‌های ارتباطی */}
          <ul className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* کارت تماس مستقیم */}
            <li>
              <a
                href="tel:+93785788463"
                className="group h-full p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-red-500/60 dark:hover:border-red-500/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-500/10 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <LuPhoneCall className="text-2xl" />
                </div>
                <div>
                  <span className="block font-Vazirmatn-Bold text-zinc-900 dark:text-zinc-100 text-sm mb-1">
                    تماس مستقیم
                  </span>
                  <span
                    dir="ltr"
                    className="font-Vazirmatn-Medium text-zinc-600 dark:text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-400 text-sm transition-colors"
                  >
                    +93 785 788 463
                  </span>
                </div>
              </a>
            </li>

            {/* کارت واتساپ */}
            <li>
              <a
                href="https://wa.me/93785788463"
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <BsWhatsapp className="text-2xl" />
                </div>
                <div>
                  <span className="block font-Vazirmatn-Bold text-zinc-900 dark:text-zinc-100 text-sm mb-1">
                    پیام در واتساپ
                  </span>
                  <span
                    dir="ltr"
                    className="font-Vazirmatn-Medium text-zinc-600 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 text-sm transition-colors"
                  >
                    +93 785 788 463
                  </span>
                </div>
              </a>
            </li>

            {/* کارت آدرس */}
            <li>
              <div className="group h-full p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 hover:border-red-500/60 dark:hover:border-red-500/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-500/10 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <FaLocationDot className="text-2xl" />
                </div>
                <div>
                  <span className="block font-Vazirmatn-Bold text-zinc-900 dark:text-zinc-100 text-sm mb-1">
                    آدرس نمایشگاه
                  </span>
                  <p className="font-Vazirmatn-Regular text-zinc-600 dark:text-zinc-400 text-sm">
                    کابل، افغانستان
                  </p>
                </div>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </section>
  );
};

export default Contact_us;
