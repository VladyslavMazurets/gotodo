import React from 'react'
import { useSelector } from 'react-redux'

import TodoCard from '../components/TodoCard'
import { ITodoObj } from '../store/todo'

function Home() {

  const hideTasks = useSelector((state: any) => state.hidecheckbox.hide)
  const allTodos = useSelector((state: any) => state.alltodos.data)

  const doneTodo = allTodos.filter((item: ITodoObj) => item.done !== true)


  if (allTodos.length == 0) return (
    <div className='flex text-text-color text-4xl items-center justify-center
  w-full mb-20'>
      You currently do not have any tasks. Add your first task
    </div>
  )

  return (
    <>
      <div className='content-start flex flex-wrap overflow-y-scroll 
      max-h-[680px] w-full'>
        {!hideTasks ? allTodos.map((todo: ITodoObj) => {
          return < TodoCard key={todo.id} todo={todo} />
        })
          :
          doneTodo.map((todo: ITodoObj) => {
            return < TodoCard key={todo.id} todo={todo} />
          })
        }
      </div>
    </>
  )
}

export default Home