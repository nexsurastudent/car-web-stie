import React from 'react'
import Brand_section from './brand_section'
import Cars_type from './cars_type'

const Type_cars_brands = () => {
  return (
    <section className='w-full p-5 grid grid-cols-1 lg:grid-cols-2 gap-3'>
        <Cars_type />
        <Brand_section />
    </section>
  )
}

export default Type_cars_brands