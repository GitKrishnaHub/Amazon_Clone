import React from 'react'
import Banner from '../Components/home/Banner'
import Product from '../Components/home/Product'

function Home() {
  return (
    <div className=''>
      <Banner/>
      <div className='w-full  py-4 -mt-20 xl:-mt-40 bg-gray-200'>
      <Product/>
      </div>
    </div>
  )
}

export default Home
