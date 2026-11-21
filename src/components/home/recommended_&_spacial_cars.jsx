import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

// =========== Import images ======== 
import Image1 from '../../assets/image/Toyota Prado.webp'
import Image2 from '../../assets/image/Honda Civic.webp'
import Image3 from '../../assets/image/Toyota camry.webp'
import Image4 from '../../assets/image/Lexus RX 350.jpg'

const RecommendedSpacial_cars = () => {
    const cars = [
        {
            id: 1,
            image: Image1,
            title: 'Toyota Prado',
            label: 'جدید',
            price: '60.000',
            discount_price: '0'
        },
        {
            id: 2,
            image: Image2,
            title: 'Honda Civic',
            label: 'تخیف ویژه',
            price: '60.000',
            discount_price: '24.000'
        },
        {
            id: 3,
            image: Image3,
            title: 'Toyota camry',
            label: 'پرفروش',
            price: '56.000',
            discount_price: '28.000'
        },
        {
            id: 4,
            image: Image4,
            title: 'Lexus RX 350',
            label: 'تخفیف ویژه',
            price: '56.000',
            discount_price: '52.000'
        },
    ]
    return (
        <section className='w-full mt-10 p-5'>
            <div className="mb-5 overflow-hidden flex items-center justify-center gap-4">
                {/* خط سمت راست با گرادیانت محو شونده و دایره در انتها */}
                <div className="hidden sm:flex items-center">
                    <span className="w-24 md:w-36 h-[3px] bg-gradient-to-r from-red-600 to-transparent rounded-full"></span>
                    <span className="w-2.5 h-2.5 bg-red-600 rounded-full -mr-1"></span>
                </div>

                {/* متن و ستاره */}
                <h2 className="font-Vazirmatn-Black text-2xl sm:text-4xl text-zinc-900 flex items-center justify-center gap-2.5 whitespace-nowrap">
                    <FaStar className="text-red-600 text-2xl sm:text-3xl shrink-0" />
                    <span>موترهای ویژه و پیشنهادی</span>
                </h2>

                {/* خط سمت چپ با گرادیانت محو شونده و دایره در ابتدا */}
                <div className="hidden sm:flex items-center">
                    <span className="w-2.5 h-2.5 bg-red-600 rounded-full -ml-1"></span>
                    <span className="w-24 md:w-36 h-[3px] bg-gradient-to-l from-red-600 to-transparent rounded-full"></span>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-3">
                {cars.map((item) => (
                  <article
                    key={item.id}
                    className="group relative bg-white dark:bg-zinc-900 rounded-2xl border              border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-2xl              hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300          flex flex-col overflow-hidden"
                  >
                    {/* بخش تصویر با افکت زوم و گرادیانت پایین */}
                    <div className="relative h-56 overflow-hidden bg-zinc-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110             transition-transform duration-500 ease-out"
                      />
                      {/* لایه تیره ملایم پایین عکس برای خوانایی بهتر */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40               via-transparent to-transparent opacity-60"></div>
                
                      {/* برچسب ویژه با ظاهر شیشه‌ای و مدرن */}
                      {item.label && (
                        <span className="absolute top-3.5 left-3.5 bg-red-600/95 backdrop-blur-md               text-white text-xs font-Vazirmatn-Medium px-3.5 py-1.5 rounded-full             shadow-lg flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                          {item.label}
                        </span>
                      )}
                    </div>
                  
                    {/* محتوای کارت */}
                    <div className="p-5 flex flex-col flex-1 justify-between">
                      <div>
                        {/* عنوان موتر */}
                        <h3 className="font-Vazirmatn-Black text-lg text-zinc-900 dark:text-white               group-hover:text-red-600 transition-colors line-clamp-1">
                          {item.title}
                        </h3>
                  
                        {/* خط جداکننده ظریف */}
                        <div className="w-full h-[1px] bg-zinc-100 dark:bg-zinc-800 my-3.5"></div>
                  
                        {/* بخش قیمت‌گذاری منظم */}
                        <div className="flex items-center justify-between mb-5">
                          <span className="text-xs text-zinc-500 font-Vazirmatn-Regular">
                            قیمت فروش:
                          </span>
                          <div className="flex flex-col items-end">
                            {item.price && (
                              <span className="text-xs text-zinc-400 line-through               font-Vazirmatn-Regular">
                                ${item.price}
                              </span>
                            )}
                            <div className="flex items-baseline gap-1 text-red-600              font-Vazirmatn-Black">
                              <span className="text-2xl">{item.discount_price}</span>
                              <span className="text-sm font-bold">$</span>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                      {/* دکمه مشاهده جزئیات تعاملی */}
                      <Link
                        to={`/car-details/${item.id}`}
                        className="w-full py-3 px-5 rounded-xl bg-zinc-900 dark:bg-zinc-800             text-white font-Vazirmatn-Medium text-sm flex items-center justify-center               gap-2 group-hover:bg-red-600 transition-all duration-300 shadow-md          group-hover:shadow-red-600/25"
                      >
                        <span>مشاهده جزئیات</span>
                        <FaArrowLeftLong className="group-hover:-translate-x-1.5    transition-transform duration-300" />
                      </Link>
                    </div>
                  </article>
                ))}
            </div>
        </section>
        )
    }

export default RecommendedSpacial_cars