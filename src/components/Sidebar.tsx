import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

import Mom from '../assets/images/mom.jpg'

const activeStyle = {
    backgroundColor: '#f2f3f5',
    padding: '20px',
    borderRadius: '20px'
}

function Sidebar() {
    return (
        <>
            <div className='flex mt-10'>
                <div className='mr-16'>
                    <div className='flex flex-col mb-8 items-start'>
                        <NavLink to='work' style={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                            className='flex p-[20px]  w-full items-center text-xl 
                            text-text-color font-semibold'>
                            <div className='w-6 h-6 bg-work rounded-full
                            border-3 p-4 mr-3' />
                            work
                        </NavLink>
                        <NavLink to='/study' style={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                            className='flex p-[20px]  w-full items-center text-xl 
                            text-text-color font-semibold'>
                            <div className='w-6 h-6 bg-study rounded-full
                            border-3 p-4 mr-3' />
                            study
                        </NavLink>
                        <NavLink to='/entertainment' style={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                            className='flex p-[20px]  w-full items-center text-xl 
                            text-text-color font-semibold'>
                            <div className='w-6 h-6 bg-entertainment rounded-full
                            border-3 p-4 mr-3' />
                            entertainment
                        </NavLink>
                        <NavLink to='/family' style={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                            className='flex p-[20px]  w-full items-center text-xl 
                            text-text-color font-semibold'>
                            <div className='w-6 h-6 bg-family rounded-full
                            border-3 p-4 mr-3' />
                            family
                        </NavLink>
                    </div>
                    <div className='mt-[80px] pl-[20px]'>
                        <input type='checkbox' id='sidebar_checkbox'
                            className='sr-only peer' />
                        <label htmlFor='sidebar_checkbox' className="text-bcolor
                        text-xl cursor-pointer select-none relative ml-5
                        before:absolute before:border-2 before:inline-block 
                        before:w-5 before:h-5 before:content-[''] before:rounded 
                        before:left-[-25px] before:top-[5px] after:absolute
                        after:content-['\2714'] after:inline-block after:left-[-23px]
                        after:hidden after:top-[0px] peer-checked:after:block
                        peer-checked:text-text-color">
                            Hide Done Tasks
                        </label>
                    </div>
                    <img src={Mom} alt='Mom_Img' width='200px'
                        className='mt-[100px] ml-3' />
                </div>

                <Outlet />
            </div>
        </>
    )
}

export default Sidebar