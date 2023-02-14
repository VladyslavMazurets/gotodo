import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

import AddForms from './AddForms'

function Navbar() {

  const [clickOnAdd, setClickOnAdd] = useState<boolean>(false)

  return (
    <>
      <div className='h-auto m-2
      rounded-[50px] flex flex-col xl:fixed xl:border-4 xl:border-bcolor 
      xl:w-[98%] xl:p-10 xl:m-4'>
        <div className='flex justify-between items-center'>
          <Link to='/home' className='text-text-color font-semibold text-4xl
          ml-4 xl:text-5xl xl:pl-[20px] xl:font-bold'>
            todo
          </Link>
          <button className='text-4xl mr-4 text-text-color font-black 
          xl:text-6xl xl:mr-5'
            onClick={(() => setClickOnAdd(prevState => !prevState))}>
            +
          </button>
        </div>
        {clickOnAdd && <AddForms setClickOnAdd={setClickOnAdd} />}

        <Outlet />
      </div>
    </>
  )
}

export default Navbar