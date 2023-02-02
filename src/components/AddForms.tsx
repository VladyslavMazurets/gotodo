import React, { Dispatch } from 'react'

import { useClickOutside } from '../customHooks/useClickOutside'

function AddForms({ setClickOnAdd }: any) {

    let domNode = useClickOutside(() => setClickOnAdd(false))

    return (
        <>
            <div className='w-full h-full bg-bcolor fixed top-0 left-0 z-20
             opacity-50'></div>

            <div ref={domNode} className='h-[65%] w-[50%] fixed bg-button-text flex flex-col 
                justify-between p-12 rounded-[25px] z-30 left-[25%] top-[15%]'>
                <div className='flex justify-between text-lg font-semibold'>
                    <button className='text-text-color'
                        onClick={() => setClickOnAdd(false)}>
                        Cancel
                    </button>
                    <button className='bg-button-bg text-button-text py-3
                        px-16 rounded-[15px]'>
                        Add
                    </button>
                </div>
                <form className='flex flex-col text-text-color my-6'>
                    <div className='flex flex-col mb-6'>
                        <label htmlFor="title" className='text-2xl mb-3
                            font-bold'>
                            Title
                        </label>
                        <input id="title" placeholder='add a title ...'
                            type='text' required
                            className='bg-forms-bg rounded-[8px] p-3 
                                text-lg border-0'/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='description' className='text-2xl
                                mb-3 font-bold'>
                            Description
                        </label>
                        <textarea id="description" cols={5} rows={5}
                            placeholder='add a description ...' required
                            className='bg-forms-bg rounded-[8px] resize-none
                                text-lg border-0 p-3' />
                    </div>
                </form>
                <span className='text-2xl mb-2 text-text-color font-bold'>
                    Tags
                </span>
                <div className='flex text-text-color'>
                    <button className='flex items-center text-xl mr-2 py-3 
                        px-6 hover:bg-hover-button rounded-2xl font-semibold'>
                        <div className='bg-work rounded-full p-4 mr-1' />
                        work
                    </button>
                    <button className='flex items-center text-xl mr-2 py-3 
                        px-6 hover:bg-hover-button rounded-2xl font-semibold'>
                        <div className='bg-study rounded-full p-4 mr-1' />
                        study
                    </button>
                    <button className='flex items-center text-xl mr-2 py-3 
                        px-6 hover:bg-hover-button rounded-2xl font-semibold'>
                        <div className='bg-entertainment rounded-full p-4 
                            mr-1' />
                        entertainment
                    </button>
                    <button className='flex items-center text-xl mr-2 py-3 
                        px-6 hover:bg-hover-button rounded-2xl font-semibold'>
                        <div className='bg-family rounded-full p-4 mr-1' />
                        family
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddForms