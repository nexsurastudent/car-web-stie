import React from 'react'

const Cart_type = ({item}) => {
  return (
    <figure key={item.id} className='bg-background rounded-lg overflow-hidden shadow-2xl '>
        <img src={item.image} className='w-full h-22 object-cover' alt={item.title} />
        <h3 className='font-Vazirmatn-Medium text-center h-10 content-center font-black '>{item.title}</h3>
    </figure>
  )
}

export default Cart_type