import React from 'react'

const Layout = ({children}) => {
  return (
    <main className='2xl:container mx-auto'>
        {children}
    </main>
  )
}

export default Layout