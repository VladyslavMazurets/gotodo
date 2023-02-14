import React, { useState } from 'react'
import Dropdown from './Dropdown';

import { useClickOutside } from '../customHooks/useClickOutside'
import { useDispatch } from 'react-redux';
import { todosAction } from '../store/todo';

function TodoCard({ todo }: any) {

    const dispatch = useDispatch()

    const [buttonClick, setButtonClick] = useState<boolean>(false)

    let domNode = useClickOutside(() => setButtonClick(false))

    const DoneTask = () => {
        dispatch(todosAction.doneTodo(todo.id))
    }

    return (
        <>
            <div ref={domNode} className={`p-4 bg-todo-bg flex flex-col rounded-lg 
             h-fit w-full ${todo.completed ? 'opacity-70' : ''} m-3 sm:w-[47%] sm:ml-6 
             sm:mb-6`}>
                <div className='flex justify-between mb-4 items-center relative'>
                    <span className={`text-xl font-bold text-text-color
                   w-[95%] ${todo.completed ? 'line-through' : ''} sm:text-3xl`}>
                        {todo.title}
                    </span>
                    <div className='relative'>
                        <button className='text-2xl text-bcolor font-black 
                    tracking-widest absolute right-[0px] top-[-25px] sm:top-[-30px]
                     sm:text-4xl'
                            onClick={() => setButtonClick(prevState => !prevState)}>
                            ...
                        </button>
                        {buttonClick && <Dropdown id={todo.id} />}
                    </div>
                </div>
                <span className={`text-lg font-semibold text-text-color mb-6
                ${todo.completed ? 'line-through' : ''} sm:text-xl`}>
                    {todo.content}
                </span>
                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        {todo.tags?.work && <div className='h-6 w-6 mr-2 rounded-full bg-work sm:w-8 sm:h-8' />}
                        {todo.tags?.study && <div className='h-6 w-6 mr-2 rounded-full bg-study sm:w-8 sm:h-8' />}
                        {todo.tags?.entertainment && <div className='h-6 w-6 mr-2 rounded-full bg-entertainment sm:w-8 sm:h-8' />}
                        {todo.tags?.family && <div className='h-6 w-6 mr-2 rounded-full bg-family sm:w-8 sm:h-8' />}
                    </div>
                    <div className='text-[16px] font-semibold text-text-color
                    hidden sm:block'>
                        {todo.date && `Added Date: ${todo.date}`}
                    </div>
                    <div>
                        <input type='checkbox' id={todo.id}
                            className='sr-only'
                            onClick={DoneTask} />
                        <label htmlFor={todo.id} className={`text-xl
                        text-bcolor cursor-pointer select-none relative z-0
                        before:absolute before:border-2 before:w-5 before:h-5 
                        before:left-[-23px] before:top-[4px] before:content-[''] 
                        before:inline-block before:rounded 
                        ${todo.completed ?
                                'after:content-["✔️"] before:text-text-color after:absolute after:left-[-25px] after:top-[-2px] after:block text-text-color'
                                : ''}`}>
                            Done
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoCard