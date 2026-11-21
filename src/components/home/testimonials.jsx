import React, { useRef } from 'react';
import Banner from '../../assets/image/testmonsioal.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import P1 from '../../assets/image/p1.png';
import P2 from '../../assets/image/p2.jpg';
import P3 from '../../assets/image/p3.jpg';
import P4 from '../../assets/image/p4.png';
import wm1 from '../../assets/image/wm1.jpg';
import wm2 from '../../assets/image/wm2.jpg';

const Testimonials = () => {
  const sliderRef = useRef(null);

  const cards = [
    {
      image: P1,
      user_name: 'علی احمدی',
      description: 'بسیار خدمات خوبی دارد من راضی ام.',
      rate: 5,
    },
    {
      image: wm1,
      user_name: 'سمیه صفدری',
      description: 'بد نیست اوقدر خوب هم نیست.',
      rate: 4,
    },
    {
      image: P2,
      user_name: 'کیهان احمدی',
      description: 'موتر که من گرفتم بسیار بدون کدام مشکل بود من راضی ام',
      rate: 5,
    },
    {
      image: P3,
      user_name: 'قربان قربانی',
      description: 'نی بسیار یک فرشگاه خراب جان زن است.',
      rate: 0,
    },
    {
      image: wm2,
      user_name: 'فاطمه احمدی',
      description: 'موترم خراب بود تبدیل کردم از موتر جدیدم راضی ام',
      rate: 5,
    },
    {
      image: P4,
      user_name: 'آرسام کیهانی',
      description: 'تاپ تاپ است خدمات و بسیار خوب بود',
      rate: 5,
    },
  ];

  // تابع حرکت اسلایدر به راست و چپ
  const handleScroll = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = 420; // عرض کارت + فاصله (gap)
    sliderRef.current.scrollBy({
      left: direction === 'next' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      dir="rtl"
      className="w-full min-h-[420px] relative overflow-hidden flex items-center py-14"
    >
      {/* تصویر پس‌زمینه */}
      <img
        src={Banner}
        className="w-full h-full object-cover absolute inset-0 scale-105"
        alt="پس زمینه نظرات مشتریان"
      />

      {/* لایه تیره و گرادیانت روی بنر برای خوانایی بالای متن‌ها */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/80 to-slate-950/90 backdrop-blur-[2px]" />

      {/* محتوای اصلی */}
      <div className="w-full mx-auto px-5 md:px-10 relative z-10">
        {/* ردیف هدر: عنوان در وسط/راست و دکمه‌های اسلایدر */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          {/* عنوان بخش با خطوط قرمز گرادیانت */}
          <div className="flex items-center justify-center gap-4">
            <div className="hidden sm:flex items-center">
              <span className="w-16 md:w-28 h-[3px] bg-gradient-to-r from-red-600 to-transparent rounded-full" />
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full -mr-1 shadow-[0_0_10px_#dc2626]" />
            </div>

            <h2 className="font-Vazirmatn-Black text-white text-2xl md:text-3xl flex items-center gap-2.5 whitespace-nowrap">
              <span>نظرات مشتریان</span>
            </h2>

            <div className="hidden sm:flex items-center">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full -ml-1 shadow-[0_0_10px_#dc2626]" />
              <span className="w-16 md:w-28 h-[3px] bg-gradient-to-l from-red-600 to-transparent rounded-full" />
            </div>
          </div>

          {/* دکمه‌های کنترل اسلایدر */}
          <div className="flex items-center gap-3 p-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
            <button
              type="button"
              onClick={() => handleScroll('prev')}
              aria-label="اسلاید قبلی"
              className="group w-11 h-11 rounded-full bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-500 text-white flex justify-center items-center transition-all duration-300 cursor-pointer shadow-md active:scale-90"
            >
              <IoIosArrowForward className="text-xl transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={() => handleScroll('next')}
              aria-label="اسلاید بعدی"
              className="group w-11 h-11 rounded-full bg-white/5 hover:bg-red-600 border border-white/10 hover:border-red-500 text-white flex justify-center items-center transition-all duration-300 cursor-pointer shadow-md active:scale-90"
            >
              <IoIosArrowBack className="text-xl transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* کانتینر اسلایدر کارت‌ها */}
        <div
          ref={sliderRef}
          className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-4"
        >
          <div className="flex gap-5">
            {cards.map((item, i) => (
              <article
                key={i}
                className="snap-center flex-[0_0_100%] sm:flex-[0_0_400px] group relative bg-slate-900/75 hover:bg-slate-900/95 backdrop-blur-md border border-white/10 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between"
              >
                {/* آیکون نقل قول تزئینی */}
                <FaQuoteLeft className="absolute top-6 left-6 text-3xl text-white/5 group-hover:text-red-500/20 transition-colors duration-300" />

                {/* بخش بالایی کارت: پروفایل و ستاره‌ها */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative shrink-0">
                    <img
                      src={item.image}
                      className="w-16 h-16 rounded-full object-cover border-2 border-red-600/70 p-0.5"
                      alt={item.user_name}
                    />
                  </div>

                  <div>
                    <strong className="block font-Vazirmatn-Bold text-white text-base mb-1">
                      {item.user_name}
                    </strong>

                    {/* نمایش داینامیک ستاره‌ها بر اساس item.rate */}
                    <div className="flex items-center gap-1 text-xs">
                      {[...Array(5)].map((_, starIndex) => (
                        <FaStar
                          key={starIndex}
                          className={
                            starIndex < item.rate
                              ? 'text-amber-400'
                              : 'text-gray-600'
                          }
                        />
                      ))}
                      <span className="text-gray-400 mr-1.5 font-Vazirmatn-Regular">
                        ({item.rate}/5)
                      </span>
                    </div>
                  </div>
                </div>

                {/* متن نظر مشتری */}
                <p className="font-Vazirmatn-Regular text-gray-300 text-sm leading-7 bg-white/[0.03] p-4 rounded-xl border border-white/5">
                  «{item.description}»
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
