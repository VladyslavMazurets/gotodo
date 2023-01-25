import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

import Mom from '../assets/images/mom.jpg'

function Sidebar() {
    return (
        <>
            <div className='border-4 border-bcolor m-6 rounded-[50px] flex'>
                <div className='py-8 px-14'>
                    <Link to='/home' className='text-text-color font-bold text-5xl'>
                        todo
                    </Link>
                    <div className='flex flex-col mt-10 mb-8 items-start'>
                        <NavLink to='/work' className='flex mt-7 items-center 
                        text-xl text-text-color font-semibold'>
                            <div className='w-6 h-6 bg-work rounded-full
                            border-3 p-4 mr-3' />
                            work
                        </NavLink>
                        <NavLink to='/study' className='flex mt-7 items-center 
                        text-xl text-text-color font-semibold'>
                            <div className='w-6 h-6 bg-study rounded-full
                            border-3 p-4 mr-3' />
                            study
                        </NavLink>
                        <NavLink to='/entertainment' className='flex mt-7 items-center 
                        text-xl text-text-color font-semibold'>
                            <div className='w-6 h-6 bg-entertainment rounded-full
                            border-3 p-4 mr-3' />
                            entertainment
                        </NavLink>
                        <NavLink to='/family' className='flex mt-7 items-center 
                        text-xl text-text-color font-semibold'>
                            <div className='w-6 h-6 bg-family rounded-full
                            border-3 p-4 mr-3' />
                            family
                        </NavLink>
                    </div>
                    <div className='mt-[80px]'>
                        <input type='checkbox' id='sidebar_checkbox'
                            className='sr-only reep' />
                        <label htmlFor='sidebar_checkbox' className="text-bcolor
                        text-xl cursor-pointer select-none relative ml-5
                        before:absolute before:border-2 before:inline-block 
                        before:w-5 before:h-5 before:content-[''] before:rounded 
                        before:left-[-25px] before:top-[5px]">
                            Hide Done Tasks
                        </label>
                    </div>
                    <img src={Mom} alt='Mom_Img' width='200px' className='mt-[160px]' />
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default Sidebar