import React from 'react'
import Layout from '../../components/layout'
import Hero_slider from '../../components/home/hero_slider'
import RecommendedSpacial_cars from '../../components/home/recommended_&_spacial_cars'
import Type_cars_brands from '../../components/home/type_cars_&_brands'

const Home = () => {
  return (
    <Layout>
      <section className='w-full'>
        <Hero_slider />
        <RecommendedSpacial_cars />
        <Type_cars_brands />
      </section>
    </Layout>
  )
}

export default Home