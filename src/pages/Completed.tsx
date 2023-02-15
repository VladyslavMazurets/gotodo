import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from '../components/TodoCard'
import { RootType } from '../store/store'

function Completed() {

    const completedTasks = useSelector((state: RootType) =>
        state.alltodos.data.filter(todo => todo.completed == true))

    return (
        <>
            <div className='content-start flex flex-wrap overflow-y-scroll scrollbar
      max-h-[680px] w-full'>
                {completedTasks.map(todo => <TodoCard key={todo.id} todo={todo} />)}
            </div>
        </>
    )
}

export default Completed