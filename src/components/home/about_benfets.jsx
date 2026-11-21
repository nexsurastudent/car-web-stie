import React from 'react'
import About_section from './about_section'
import Benfets from './benfets'

const About_benfets = () => {
  return (
    <section className='w-full min-h-80 grid grid-cols-1 md:grid-cols-2 gap-2  p-5 py-10'>
        <About_section />
        <Benfets />
    </section>
  )
}

export default About_benfets