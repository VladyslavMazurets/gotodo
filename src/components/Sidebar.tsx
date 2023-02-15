import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

import Mom from '../assets/images/mom.jpg'
import { hideCheckboxAction } from '../store/hideCheckbox'

const activeStyle = {
    backgroundColor: '#f2f3f5',
    padding: '15px 20px 15px 20px',
    borderRadius: '20px'
}

function Sidebar() {

    const hideState = useSelector((state: any) => state.hidecheckbox.hide)
    const dispatch = useDispatch()

    const hideTasks = () => {
        dispatch(hideCheckboxAction.hideDone(!hideState))
    }

    return (
        <>
            <div className='flex flex-col mt-3 sm:flex-row sm:mt-8 xl:mt-10'>
                <div className='flex items-center mx-4 sm:mx-2 sm:flex-col 
                xl:mr-16'>
                    <div className='flex content-center overflow-x-scroll 
                    sm:flex-col sm:mb-8 sm:overflow-hidden'>
                        <NavLink to='work' style={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                            className='flex p-[15px] w-full items-center text-xl 
                            text-text-color font-semibold mb-3 '>
                            <div className='bg-work rounded-full
                            border-3 p-3 mr-3 sm:p-4' />
                            work
                        </NavLink>
                        <NavLink to='/study' style={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                            className='flex p-[15px] w-full items-center text-xl 
                            text-text-color font-semibold mb-3 '>
                            <div className='bg-study rounded-full
                            border-3 p-3 mr-3 sm:p-4' />
                            study
                        </NavLink>
                        <NavLink to='/entertainment' style={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                            className='flex p-[15px] w-full items-center text-xl 
                            text-text-color font-semibold mb-3 '>
                            <div className='bg-entertainment rounded-full
                            border-3 p-3 mr-3 sm:p-4' />
                            entertainment
                        </NavLink>
                        <NavLink to='/family' style={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                            className='flex p-[15px] w-full items-center text-xl 
                            text-text-color font-semibold mb-3 '>
                            <div className='bg-family rounded-full
                            border-3 p-3 mr-3 sm:p-4' />
                            family
                        </NavLink>
                    </div>
                    <div className='flex flex-col hidden sm:block text-center mt-[-65px]'>
                        <div className='mt-[80px]'>
                            <input type='checkbox' id='sidebar_checkbox'
                                className='sr-only peer' onClick={hideTasks} />
                            <label htmlFor='sidebar_checkbox' className={`text-bcolor
                        text-xl cursor-pointer select-none relative ml-5
                        before:absolute before:border-2 before:inline-block 
                        before:w-5 before:h-5 before:content-[''] before:rounded 
                        before:left-[-25px] before:top-[5px] after:absolute
                        ${hideState ?
                                    'after:content-["✔️"] before:text-text-color after:absolute after:left-[-28px] after:top-[-2px] after:block text-text-color'
                                    : ''}`}>
                                Hide Done Tasks
                            </label>
                        </div>
                        <NavLink to='completed' style={({ isActive }) =>
                            isActive ? activeStyle : undefined} className='flex w-full 
                        text-xl text-text-color font-semibold p-[15px] mt-4'>
                            Completed Tasks
                        </NavLink>
                    </div>
                    <img src={Mom} alt='Mom_Img'
                        className='mt-[100px] ml-3 hidden mt-[83px] sm:block 
                        sm:w-[160px] xl:w-[175px]' />
                </div>

                <Outlet />
            </div>
        </>
    )
}

export default Sidebar