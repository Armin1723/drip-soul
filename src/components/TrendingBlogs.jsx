import React from 'react'
import Carousel from './Carousel'
import ProductCard from './ProductCard'

const TrendingBlogs = () => {
  return (
    <div className='z-[2] bg-gray-300 py-[15vh] flex justify-center'>
        <Carousel autoSlide  autoSlideInterval={3000}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Carousel>
    </div>
  )
}

export default TrendingBlogs
