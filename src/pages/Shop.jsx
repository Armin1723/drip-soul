import React from 'react'

const Shop = () => {
    return (
        <div className='flex flex-col text-white justify-center items-center h-screen'>
          <p>Shop</p>
          <Link to='/' className='relative rounded-lg px-4 py-2 overflow-hidden before:bg-gray-900 border-gray-800 shadow-[0_0_25px_gray] before:absolute before:left-0 before:bottom-0 before:h-0 before:w-0 hover:before:w-full hover:before:h-full before:transition-all before:duration-300 before:z-[-1]'>Back to Home</Link>
        </div>
      )
}

export default Shop
