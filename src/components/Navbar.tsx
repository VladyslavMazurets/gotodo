import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='w-auto h-[94vh] border-4 border-bcolor m-6 p-10
            rounded-[50px] flex flex-col'>
        <div className='flex justify-between items-center'>
          <Link to='/home' className='text-text-color font-bold text-5xl
        pl-[20px]'>
            todo
          </Link>
          <button className='text-6xl text-text-color mr-5 font-black'>
            +
          </button>
        </div>

        <Outlet />
      </div>
    </>
  )
}

export default Navbar