import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const TODOS_KEY = 'TODOS'

export interface ITodoObj {
    id: string,
    title: string,
    content: string,
    completed?: boolean | null,
    date: string,
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
        removeTodo(state, action: PayloadAction<string>) {
            state.data = state.data.filter(item => item.id !== action.payload)
            localStorage.setItem(TODOS_KEY, JSON.stringify(state.data))
        },
        removeAllTodo(state, action: PayloadAction) {
            state.data = [] 
            localStorage.setItem(TODOS_KEY, JSON.stringify(state.data))
        },
        doneTodo(state, action: PayloadAction<string>) {
            const index = state.data.findIndex(item => item.id === action.payload)
            state.data[index].completed = !state.data[index].completed
            localStorage.setItem(TODOS_KEY, JSON.stringify(state.data))
        },
        editTodo(state, action: PayloadAction<ITodoObj>) {
            const index = state.data.findIndex(item => item.id === action.payload.id)
            state.data[index] = action.payload
            localStorage.setItem(TODOS_KEY, JSON.stringify(state.data))
        }
    }
}
)

export const todosReducer = todosSlice.reducer
export const todosAction = todosSlice.actions