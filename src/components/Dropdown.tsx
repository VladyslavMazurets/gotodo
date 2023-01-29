import React from 'react'

function Dropdown() {
    return (
        <>
            <div className='bg-button-text absolute p-2 left-[-190px] 
            top-[15px] rounded-xl'>
                <div className='flex flex-col items-start '>
                    <button className='text-lg text-bcolor pr-[105px] ml-3 p-2
                    transition delay-80 hover:text-text-color'>
                        Edit ...
                    </button>
                    <div className='w-full border-b text-bcolor my-1' />
                    <button className='text-lg text-bcolor pr-[105px] ml-3 p-2
                     transition delay-80 hover:text-text-color'>
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default Dropdown