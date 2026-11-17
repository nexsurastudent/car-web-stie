import React from 'react'
import LargeMenu from './largeMenu'
import Layout from '../../layout'
import MobileMenu from './mobileMenu'

const MainHeader = () => {
  return (
    <section className='w-full bg-primary'>
        <Layout>
            <LargeMenu />
            <MobileMenu />
        </Layout>
    </section>
  )
}

export default MainHeader