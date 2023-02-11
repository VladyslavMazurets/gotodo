import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from '../components/TodoCard'
import { RootType } from '../store/store'

function Entertainment() {

  const entertainmentTodos = useSelector((state: RootType) =>
    state.alltodos.data.filter(todo => todo.tags.entertainment))
  const hideEntertainment = useSelector((state: RootType) =>
    state.hidecheckbox.hide)

  const doneEntertainment = entertainmentTodos.filter(todo =>
    todo.done !== true)

  return (
    <>
      <div className='content-start flex flex-wrap overflow-y-scroll 
      max-h-[680px] w-full'>
        {!hideEntertainment ?
          entertainmentTodos.map(todo => <TodoCard key={todo.id} todo={todo} />)
          :
          doneEntertainment.map(todo => <TodoCard key={todo.id} todo={todo} />)
        }
      </div>
    </>
  )
}

export default Entertainment