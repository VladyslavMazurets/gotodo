import React from 'react'
import { useSelector } from 'react-redux'

import TodoCard from '../components/TodoCard'
import { RootType } from '../store/store'
import '../style/Scrollbar.css'

function Family() {

  const familyTodo = useSelector((state: RootType) =>
    state.alltodos.data.filter(todo => todo.tags.family))
  const hideTasks = useSelector((state: RootType) => state.hidecheckbox.hide)

  const doneFamily = familyTodo.filter(todo => todo.completed !== true)

  return (
    <>
      <div className='content-start flex flex-wrap overflow-y-scroll scrollbar
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