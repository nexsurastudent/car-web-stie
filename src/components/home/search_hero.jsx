import React from 'react'

const Search_hero = () => {
  return (
    <form className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 bg-white p-4 rounded-md'>
        <select className= 'border-2 p-1 border-gray-300 rounded-md shadow-2xl'>
            <option selected disabled>برند</option>
            <option value="">TOYOUTA</option>
            <option value="">ILAX</option>
            <option value="">BNZ</option>
            <option value="">BMD</option>
        </select>
        <select className= 'border-2 p-1 border-gray-300 rounded-md shadow-2xl'>
            <option selected disabled>مدل</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
        </select>
        <select className= 'border-2 p-1 border-gray-300 rounded-md shadow-2xl'>
            <option value="افغانی">قیمت(افغانی)</option>
            <option value="دالر">قیمت(دالر)</option>
        </select>
        <button className='bg-red-500 text-white rounded-md py-3'>جستجو</button>
    </form>
  )
}

export default Search_hero