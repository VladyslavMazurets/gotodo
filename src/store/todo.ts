import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const TODOS_KEY = 'TODOS'

export interface ITodoObj {
    id: string,
    title: string,
    content: string,
    done: boolean,
    tags: {
        work: boolean,
        study: boolean,
        entertainment: boolean,
        family: boolean
    }
}

interface ITodo {
    data: ITodoObj[]
}

const initialState: ITodo = {
    data: JSON.parse(localStorage.getItem(TODOS_KEY) ?? '[]')
}

export const todosSlice = createSlice({
    name: 'alltodos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<ITodoObj>) {
            state.data.push(action.payload)
            localStorage.setItem(TODOS_KEY, JSON.stringify(state.data))
        },
        removeTodo(state, action) {
            state.data = state.data.filter(item => item.id !== action.payload)
            localStorage.setItem(TODOS_KEY, JSON.stringify(state.data))
        },
        hideTodo(state, action) {
            state.data = state.data.filter(item => item.done === true)
        }
    }
}
)

export const todosReducer = todosSlice.reducer
export const todosAction = todosSlice.actions