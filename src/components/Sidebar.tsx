import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

import Mom from '../assets/images/mom.jpg'
import { hideCheckboxAction } from '../store/hideCheckbox'

const activeStyle = {
    backgroundColor: '#f2f3f5',
    padding: '20px',
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
            <div className='flex flex-col mt-3 sm:mt-10 sm:flex-row'>
                <div className='mx-4 xl:mr-16'>
                    <div className='flex content-center overflow-x-scroll 
                    sm:flex-col sm:mb-8 sm:overflow-hidden'>
                        <NavLink to='work' style={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                            className='flex p-[20px] w-full items-center text-xl 
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
                    <div className='mt-[80px] pl-[20px] hidden sm:block'>
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
                    <img src={Mom} alt='Mom_Img' width='200px'
                        className='mt-[100px] ml-3 hidden sm:block' />
                </div>

                <Outlet />
            </div>
        </>
    )
}

export default Sidebar