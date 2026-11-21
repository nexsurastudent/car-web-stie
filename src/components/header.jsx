import React from 'react'
import TopHeader from './Layout/header/TopHeader'
import MainHeader from './Layout/header/MainHeader'

const Header = () => {
  return (
    <header className='w-full'>
        <TopHeader />
        <MainHeader />
    </header>
  )
}

export default Header