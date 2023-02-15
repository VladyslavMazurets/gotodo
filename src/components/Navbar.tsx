import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { todosAction } from '../store/todo'

import AddForms from './AddForms'

function Navbar() {

  const [clickOnAdd, setClickOnAdd] = useState<boolean>(false)
  const dispatch = useDispatch()

  const deleteAllTodos = () => {
    dispatch(todosAction.removeAllTodo())
  }

  return (
    <>
      <div className='h-auto w-[98%] rounded-[50px] flex flex-col 
      sm:border-4 sm:border-bcolor sm:p-4 sm:m-3 xl:p-10 xl:m-4'>
        <div className='flex justify-between items-center'>
          <Link to='/home' className='text-text-color font-semibold text-4xl
          ml-4 sm:pl-[20px] sm:font-bold xl:text-5xl '>
            go todo
          </Link>
          <div>
            <button className='text-xl mr-4 text-text-color font-black 
           sm:mr-5 sm:text-2xl xl:text-3xl'
              onClick={(() => setClickOnAdd(prevState => !prevState))}>
              ➕
            </button>
            <button className='text-xl mr-4 text-text-color font-black 
           sm:mr-5 sm:text-2xl xl:text-3xl' onClick={deleteAllTodos}>
              🗑️
            </button>
          </div>
        </div>
        {clickOnAdd && <AddForms setClickOnAdd={setClickOnAdd} />}

        <Outlet />
      </div>
    </>
  )
}

export default Navbar