import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from '../components/TodoCard'
import { RootType } from '../store/store'

function Family() {

  const familyTodo = useSelector((state: RootType) =>
    state.alltodos.data.filter(todo => todo.tags.family))
  const hideTasks = useSelector((state: RootType) => state.hidecheckbox.hide)

  const doneFamily = familyTodo.filter(todo => todo.done !== true)

  return (
    <>
      <div className='content-start flex flex-wrap overflow-y-scroll 
      max-h-[680px] w-full'>
        {!hideTasks ?
          familyTodo.map(todo => <TodoCard key={todo.id} todo={todo} />)
          :
          doneFamily.map(todo => <TodoCard key={todo.id} todo={todo} />)}
      </div>
    </>
  )
}

export default Family