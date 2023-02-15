import React from 'react'

function NoTodos() {
    return (
        <>
            <div className='flex absolute top-[50%] text-text-color text-xl
             text-center p-2 w-full mb-20 sm:max-h-[680px] sm:static 
             sm:items-center sm:justify-center xl:text-3xl'>
                You currently do not have any tasks. Add your first task
            </div>
        </>
    )
}

export default NoTodos