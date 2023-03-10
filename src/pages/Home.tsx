import React from 'react'
import { useSelector } from 'react-redux'
import NoTodos from '../components/NoTodos'

import TodoCard from '../components/TodoCard'
import { ITodoObj } from '../store/todo'
import '../style/Scrollbar.css'

function Home() {

  const hideTasks = useSelector((state: any) => state.hidecheckbox.hide)
  const allTodos = useSelector((state: any) => state.alltodos.data)

  const doneTodo = allTodos.filter((item: ITodoObj) => item.completed !== true)

  if (allTodos.length == 0) return (<NoTodos />)

  return (
    <>
      <div className='max-h-[680px] content-start flex flex-wrap 
      overflow-y-scroll w-full justify-center sm:justify-start sm:scrollbar'>
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