import React from 'react'
import Layout from '../../components/layout'
import Hero_slider from '../../components/home/hero_slider'
import RecommendedSpacial_cars from '../../components/home/recommended_&_spacial_cars'
import Type_cars_brands from '../../components/home/type_cars_&_brands'
import Deals from '../../components/home/deal'
import About_benfets from '../../components/home/about_benfets'

const Home = () => {
  return (
    <Layout>
      <section className='w-full'>
        <Hero_slider />
        <RecommendedSpacial_cars />
        <Type_cars_brands />
        <Deals />
        <About_benfets />
      </section>
    </Layout>
  )
}

export default Home