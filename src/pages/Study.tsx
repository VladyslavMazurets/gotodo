import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from '../components/TodoCard'
import { RootType } from '../store/store'

function Study() {

  const studyTodo = useSelector((state: RootType) =>
    state.alltodos.data.filter(todo => todo.tags.study))
  const hideStudy = useSelector((state: RootType) => state.hidecheckbox.hide)

  const doneStudy = studyTodo.filter(todo => todo.done !== true)

  return (
    <>
      <div className='content-start flex flex-wrap overflow-y-scroll 
      max-h-[680px] w-full'>
        {!hideStudy ?
          studyTodo.map(todo => <TodoCard key={todo.id} todo={todo} />)
          :
          doneStudy.map(todo => <TodoCard key={todo.id} todo={todo} />)
        }
      </div>
    </>
  )
}

export default Study