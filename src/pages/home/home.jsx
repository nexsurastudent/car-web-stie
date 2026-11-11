import React from 'react'
import Layout from '../../components/layout'
import Hero_slider from '../../components/home/hero_slider'

const Home = () => {
  return (
    <Layout>
      <section className='w-full'>
        <Hero_slider />
      </section>
    </Layout>
  )
}

export default Home