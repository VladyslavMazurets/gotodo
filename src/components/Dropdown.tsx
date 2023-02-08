import React from 'react'
import { useDispatch } from 'react-redux'
import { todosAction } from '../store/todo'

function Dropdown({id}: any) {

    const dispatch = useDispatch()

    const DeleteTodoItem = () => {
        dispatch(todosAction.removeTodo(id))
    }

    return (
        <>
            <div className='bg-button-text absolute p-2 left-[-190px] 
            top-[15px] rounded-xl z-20'>
                <div className='flex flex-col items-start '>
                    <button className='text-lg text-bcolor pr-[105px] ml-3 p-2
                    transition delay-80 hover:text-text-color'>
                        Edit ...
                    </button>
                    <div className='w-full border-b text-bcolor my-1' />
                    <button className='text-lg text-bcolor pr-[105px] ml-3 p-2
                     transition delay-80 hover:text-text-color' onClick={DeleteTodoItem}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default Dropdown