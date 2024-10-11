import Footer from './components/Footer'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import TrendingBlogs from './components/TrendingBlogs'
import './index.css'

import React from 'react'

const App = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <TrendingBlogs />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
