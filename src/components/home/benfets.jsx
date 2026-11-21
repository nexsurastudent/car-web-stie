import React from 'react'
import { FaCar } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";


const Benfets = () => {
    const Benfets = [
        {
            title:'تنوع گسترده موترها',
            icon:<FaCar />,
        },
        {
            title:'قیمت های مناسب و رقابتی',
            icon:<FaSackDollar />
        },
        {
            title:'پیشتبانی 24 ساعته و مشاروه رایگان',
            icon:<MdSupportAgent />
        },
            {
                title:'خرید مطمئن و تضمین کیفیت',
                icon:<RiSecurePaymentLine />
            },
    ]
  return (
    <div>
        <div className="mb-5 overflow-hidden flex items-center justify-center gap-4">
            {/* خط سمت راست با گرادیانت محو شونده و دایره در انتها */}
            <div className="hidden sm:flex items-center">
                <span className="w-24 md:w-10 h-[3px] bg-gradient-to-r from-red-600 to-transparent rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full -mr-1"></span>
            </div>
            {/* متن و ستاره */}
            <h2 className="font-Vazirmatn-Black text-3xl text-zinc-900 flex items-center justify-center gap-2.5 whitespace-nowrap">
                <span>چرا از فروشگاه ما خرید کنید؟</span>
            </h2>
            {/* خط سمت چپ با گرادیانت محو شونده و دایره در ابتدا */}
            <div className="hidden sm:flex items-center">
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full -ml-1"></span>
                <span className="w-24 md:w-10 h-[3px] bg-gradient-to-l from-red-600 to-transparent rounded-full"></span>
            </div>
        </div>

        {/* =============== Cards ==================  */}

        <div className='w-full grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-4 gap-4'>
            {
                Benfets.map((item,i)=>(
                    <div key={i} className='benfets_card-shadow rounded-lg text-center content-center px-5 py-2.5 bg-background'>
                        <span className='text-4xl mb-3 text-red-500 flex justify-center'>{item.icon}</span>
                        <h3 className='font-Vazirmatn-Bold text-lg'>{item.title}</h3>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Benfets