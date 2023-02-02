import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import AddForms from './AddForms'

function Navbar() {

  const [clickOnAdd, setClickOnAdd] = useState<boolean>(false)

  return (
    <>
      <div className='w-fit h-auto fixed border-4 border-bcolor m-4 p-10
      rounded-[50px] flex flex-col'>
        <div className='flex justify-between items-center'>
          <Link to='/home' className='text-text-color font-bold text-5xl
        pl-[20px]'>
            todo
          </Link>
          <button className='text-6xl text-text-color mr-5 font-black'
            onClick={(() => setClickOnAdd(prevState => !prevState))}>
            +
          </button>
        </div>
        {clickOnAdd && <AddForms setClickOnAdd={setClickOnAdd}/>}

        <Outlet />
      </div>
    </> 
  )
}

export default Navbar