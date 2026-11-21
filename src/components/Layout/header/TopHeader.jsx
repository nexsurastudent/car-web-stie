import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../layout'
import { PiWhatsappLogo } from "react-icons/pi";
import { TbPhoneCalling } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";


const TopHeader = () => {
  return (
    <div className='w-full topheader_grarient'>
        <Layout>
            <div className='grid  grid-cols-1 md:grid-cols-2 p-3 gap-y-4'>

                 {/* ===== Side right =====  */}
                <div className='text-center md:text-right'>
                    <p className='text-white font-Vazirmatn-Medium'>موتر رویایی خود راهمین حالا پیدا کنید!</p>
                </div>

                 {/* ===== Side left =====  */}
                <div className='font-Vazirmatn-Regular  flex gap-5 justify-center md:justify-end  items-center text-white'>
                    <Link to={'https://wa.me/93785788463'} title='whatsapp : +93 785 788 463' className='flex items-center gap-2'>
                        <PiWhatsappLogo />
                        واتساپ
                     </Link>
                    <Link to={'tel:93785788463'} title='Mobile number: +93 785 788 463' dir='ltr' className='flex items-center gap-2'>
                        +93 785 788 463
                        <TbPhoneCalling />
                    </Link>
                    <p className='flex items-center gap-2' title=' کابل افغانستان'>
                        <IoLocation />
                        کابل افغانستان
                    </p>
                </div>


            </div>
        </Layout>
    </div>
  )
}

export default TopHeader