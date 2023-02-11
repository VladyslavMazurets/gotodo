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
            w-[47%] h-fit ml-6 mb-6 ${todo.done ? 'opacity-70' : ''}`}>
                <div className='flex justify-between mb-4 items-center relative'>
                    <span className={`text-3xl font-bold text-text-color
                    ${todo.done ? 'line-through' : ''}`}>
                        {todo.title}
                    </span>
                    <div className='relative'>
                        <button className='text-4xl text-bcolor font-black 
                    tracking-widest absolute right-[0px] top-[-30px]'
                            onClick={() => setButtonClick(prevState => !prevState)}>
                            ...
                        </button>
                        {buttonClick && <Dropdown id={todo.id} />}
                    </div>
                </div>
                <span className={`text-lg font-semibold text-text-color mb-6
                ${todo.done ? 'line-through' : ''}`}>
                    {todo.content}
                </span>
                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        {todo.tags.work && <div className='w-8 h-8 mr-2 rounded-full bg-work' />}
                        {todo.tags.study && <div className='w-8 h-8 mr-2 rounded-full bg-study' />}
                        {todo.tags.entertainment && <div className='w-8 h-8 mr-2 rounded-full bg-entertainment' />}
                        {todo.tags.family && <div className='w-8 h-8 mr-2 rounded-full bg-family' />}
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
                        ${todo.done ?
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