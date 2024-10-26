import React from 'react'

const Header = ({data}) => {
  return (
    <div className='w-full flex justify-between py-3 mt-4 items-center font-medium text-xl md:mt-0'>
      <div>
        <h3 className='md:text-2xl'>Hello</h3>
        <h1 className='text-2xl pt-1 md:text-3xl'>{data?.firstName || "Guest"}  👋</h1>
      </div>
      <div>
        <a href="" className='bg-orange-600 rounded-full px-4 py-2 mt-8'>Log Out</a>
      </div>
    </div>
  )
}

export default Header