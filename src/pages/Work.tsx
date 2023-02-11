import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from '../components/TodoCard'
import { RootType } from '../store/store'

function Work() {

  const workTodo = useSelector((state: RootType) =>
    state.alltodos.data.filter((todo => todo.tags.work)))
  const hideWork = useSelector((state: RootType) => state.hidecheckbox.hide)

  const hideWorkTodo = workTodo.filter((todo) => todo.done !== true)

  return (
    <>
      <div className='content-start flex flex-wrap overflow-y-scroll 
      max-h-[680px] w-full'>
        {!hideWork ?
          workTodo.map((todo) => <TodoCard key={todo.id} todo={todo} />)
          :
          hideWorkTodo.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
      </div>
    </>
  )
}

export default Work