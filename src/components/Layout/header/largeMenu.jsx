import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";



const LargeMenu = () => {
  return (
    <div className='w-full hidden lg:flex justify-between p-4'>


        <figure>
            <Link to={'/'}>
                <img src="/logo.png" className='w-30' alt="" />
            </Link>
        </figure>


        <ul className='flex items-center text-white font-Vazirmatn-Medium gap-5'>
            <li><Link to={'/'}>صفحه اصلی</Link></li>
            <li><Link to={'/'}>موترها</Link></li>
            <li><Link to={'/'}>برندها</Link></li>
            <li><Link to={'/'}>پیشنهادات ویژه</Link></li>
            <li><Link to={'/'}>درباره ما</Link></li>
            <li><Link to={'/'}>تماس باما</Link></li>
        </ul>



        <div className='flex gap-4 font-Vazirmatn-Medium'>
            <Link to={'/login'} className='flex gap-4 rounded-md items-center bg-primary-Secondary text-white px-4 py-2'>
                <FaUserAlt />
                ورود 
            </Link>
            <Link to={'/register'} className='flex gap-4 items-center bg-accent text-white px-4 py-2 rounded-md'>
                <FaPlus />
                ثبت نام 
            </Link>
        </div>



    </div>
  )
}

export default LargeMenu