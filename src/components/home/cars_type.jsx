import React from 'react'

import Cart_type from './car_type_brands/cart_type'
import Car_type from './car_type_brands/car_type'

const Cars_type = () => {
  const {Cars} = Car_type()
  return (
    
        <div className='w-full'>
            <div className="mb-5 overflow-hidden flex items-center justify-center gap-4">
                {/* خط سمت راست با گرادیانت محو شونده و دایره در انتها */}
                <div className="hidden sm:flex items-center">
                    <span className="w-24 md:w-36 h-[3px] bg-gradient-to-r from-red-600 to-transparent rounded-full"></span>
                    <span className="w-2.5 h-2.5 bg-red-600 rounded-full -mr-1"></span>
                </div>
                {/* متن و ستاره */}
                <h2 className="font-Vazirmatn-Black text-2xl text-zinc-900 flex items-center justify-center gap-2.5 whitespace-nowrap">

                    <span>موترها براساس نوع</span>
                </h2>
                {/* خط سمت چپ با گرادیانت محو شونده و دایره در ابتدا */}
                <div className="hidden sm:flex items-center">
                    <span className="w-2.5 h-2.5 bg-red-600 rounded-full -ml-1"></span>
                    <span className="w-24 md:w-36 h-[3px] bg-gradient-to-l from-red-600 to-transparent rounded-full"></span>
                </div>
            </div>


            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-3'>
                {
                    Cars.map((item,index)=>(
                        <Cart_type item={item} /> 
                    ))
                }
            </div>
        </div>
  )
}
export default Cars_type