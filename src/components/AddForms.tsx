import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'

import { useClickOutside } from '../customHooks/useClickOutside'
import { todosAction } from '../store/todo';

function AddForms({ setClickOnAdd }: any) {

    let domNode = useClickOutside(() => setClickOnAdd(false))
    const dispatch = useDispatch();

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [work, setWork] = useState<boolean>(false)
    const [study, setStudy] = useState<boolean>(false)
    const [entertainment, setEntertainment] = useState<boolean>(false)
    const [family, setFamily] = useState<boolean>(false)

    const AddNewTodoItem = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let today = new Date();
        let date = `${today.getDate()} - ${today.getUTCMonth() < 10 ?
            `0${today.getUTCMonth() + 1}` : today.getUTCMonth() + 1} - 
        ${today.getFullYear()}`

        if (title && content) {
            dispatch(todosAction.addTodo({
                id: nanoid(), title, content, completed: false, date, tags: {
                    work, study, entertainment, family
                }
            }))
            setTitle('')
            setContent('')
            setWork(false)
            setStudy(false)
            setEntertainment(false)
            setFamily(false)
            setClickOnAdd(false)
        }
    }

    return (
        <>
            <div className='w-full h-full bg-bcolor fixed top-0 left-0 z-20
             opacity-50 hidden sm:block'></div>

            <div ref={domNode} className='fixed w-full bg-button-text flex 
            flex-col justify-between z-30 p-4 sm:w-[89%] h-fit
            sm:left-[6%] sm:top-[10%] sm:rounded-[25px] sm:p-8  
            xl:w-[50%] xl:left-[25%] xl:top-[15%] xl:p-12'>
                <form onSubmit={AddNewTodoItem}>
                    <div className='flex justify-between text-md 
                    font-semibold sm:text-lg'>
                        <button type='button' className='text-text-color'
                            onClick={() => setClickOnAdd(false)}>
                            Cancel
                        </button>
                        <button className='bg-button-bg text-button-text px-6 
                       py-1 rounded-[10px] sm:py-3 sm:px-16 sm:rounded-[15px]'
                            type='submit'>
                            Add
                        </button>
                    </div>
                    <div className='flex flex-col text-text-color my-3
                     sm:my-6'>
                        <div className='flex flex-col mb-6'>
                            <label htmlFor="title" className='text-xl mb-1
                            font-bold sm:text-2xl sm:mb-3'>
                                Title
                            </label>
                            <input id="title" placeholder='add a title ...'
                                type='text' required
                                className='bg-forms-bg rounded-[8px] 
                                 border-0 sm:p-3 sm:text-lg' value={title}
                                onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='description' className='text-xl
                                font-bold mb-1 sm:text-2xl sm:mb-3'>
                                Description
                            </label>
                            <textarea id="description" cols={5} rows={5}
                                placeholder='add a description ...' required
                                className='bg-forms-bg rounded-[8px] resize-none
                                text-md border-0 sm:p-3 sm:text-lg' value={content}
                                onChange={e => setContent(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
                <span className='text-xl mb-2 text-text-color font-bold 
                sm:text-2xl'>
                    Tags
                </span>
                <div className='flex flex-col text-text-color sm:flex-row'>
                    <button className={`flex items-center 
                     hover:bg-hover-button rounded-2xl font-semibold
                        ${work ? 'bg-hover-button' : ''} px-3 py-2 mb-1 
                        text-lg sm:text-xl sm:mr-2 sm:py-3 sm:px-6`}
                        onClick={() => setWork(prevState => !prevState)}>
                        <div className='bg-work rounded-full p-3  mr-1 
                        sm:p-4'/>
                        work
                    </button>
                    <button className={`flex items-center 
                     hover:bg-hover-button rounded-2xl font-semibold
                        ${study ? 'bg-hover-button' : ''} px-3 py-2 mb-1 
                        text-lg sm:text-xl sm:mr-2 sm:py-3 sm:px-6`}
                        onClick={() => setStudy(prevState => !prevState)}>
                        <div className='bg-study rounded-full p-3  mr-1 
                        sm:p-4'
                        />
                        study
                    </button>
                    <button className={`flex items-center 
                     hover:bg-hover-button rounded-2xl font-semibold
                        ${entertainment ? 'bg-hover-button' : ''} px-3 py-2 
                        mb-1 text-lg sm:text-xl sm:mr-2 sm:py-3 sm:px-6`}
                        onClick={() => setEntertainment(prevState => !prevState)}>
                        <div className='bg-entertainment rounded-full p-3 
                        mr-1 sm:p-4'
                        />
                        entertainment
                    </button>
                    <button className={`flex items-center 
                     hover:bg-hover-button rounded-2xl font-semibold
                        ${family ? 'bg-hover-button' : ''} px-3 py-2 mb-1 
                        text-lg sm:text-xl sm:mr-2 sm:py-3 sm:px-6`}
                        onClick={() => setFamily(prevState => !prevState)}>
                        <div className='bg-family rounded-full p-3  mr-1 sm:p-4'
                        />
                        family
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddForms