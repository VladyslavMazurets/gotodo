import React from 'react'
import { useSelector } from 'react-redux'

import TodoCard from '../components/TodoCard'

interface ITodoObj {
  id: string,
  title: string,
  content: string
}

function Home() {

  const allTodos = useSelector((state: any) => state.alltodos)

  return (
    <>
      <div className='flex flex-wrap overflow-y-scroll max-h-[680px]'>
        {allTodos.data.map((todo: ITodoObj) => {
          return < TodoCard key={todo.id} todo={todo} />
        })
        }
      </div>
    </>
  )
}

export default Home