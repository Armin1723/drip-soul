import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [error, setError] = React.useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/')

      if(response.status == 429) {
        setError({status: true, message:'Too many requests, please try again later'})
        return
      }

      if(response.ok){
        const data = await response.json()
        console.log(data)
      }       
      
    }
    fetchData()
  },[])

  if(error && error.status) {
    return(
      <div className='flex flex-col text-white justify-center items-center h-screen'>
        <p>{error.message}</p>
        <Link to='/' className='relative rounded-lg px-4 py-2 overflow-hidden before:bg-gray-900 border-gray-800 shadow-[0_0_25px_gray] before:absolute before:left-0 before:bottom-0 before:h-0 before:w-0 hover:before:w-full hover:before:h-full before:transition-all before:duration-300 before:z-[-1]'>Back to Home</Link>
      </div>
    )
  }

  return (
    <div className='flex flex-col text-white justify-center items-center h-screen'>
      <p>Contact Us</p>
      <Link to='/' className='relative rounded-lg px-4 py-2 overflow-hidden before:bg-gray-900 border-gray-800 shadow-[0_0_25px_gray] before:absolute before:left-0 before:bottom-0 before:h-0 before:w-0 hover:before:w-full hover:before:h-full before:transition-all before:duration-300 before:z-[-1]'>Back to Home</Link>
    </div>
  )
}

export default Contact
