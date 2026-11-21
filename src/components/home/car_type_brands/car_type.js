import React from 'react'
import toddy from '../../../assets/image/toddy.webp'
import corolla from '../../../assets/image/corolla.webp'
import Hilux from '../../../assets/image/Hilux.jpg'
import lankorozar from '../../../assets/image/lankorozar.webp'

const Car_type = () => {
  const Cars = [
    {
        image:corolla,
        title:'کرولا'
    },
    {
        image:lankorozar,
        title:'لانکروز'
    },
    {
        image:Hilux,
        title:'آیلکس'
    },
    {
        image:toddy,
        title:'تودی'
    }
  ]  
  return (
    {Cars}
  )
}

export default Car_type