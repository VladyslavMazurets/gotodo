import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ITodoObj {
    id: string,
    title: string,
    content: string
}

interface ITodo {
    data: ITodoObj[]
}

const initialState: ITodo = {
    data: [
        {
            id: '1',
            title: 'Todo Test 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit quam ea magnam excepturi reprehenderit!'
        },
        {
            id: '2',
            title: 'Todo Test 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit quam ea magnam excepturi reprehenderit!'
        },
        {
            id: '3',
            title: 'Todo Test 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit quam ea magnam excepturi reprehenderit!'
        },
        {
            id: '4',
            title: 'Todo Test 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit quam ea magnam excepturi reprehenderit!'
        },
        {
            id: '5',
            title: 'Todo Test 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit quam ea magnam excepturi reprehenderit!'
        },
        {
            id: '6',
            title: 'Todo Test 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit quam ea magnam excepturi reprehenderit!'
        },
        {
            id: '7',
            title: 'Todo Test 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odit quam ea magnam excepturi reprehenderit!'
        },
    ]
}

export const todosSlice = createSlice({
    name: 'alltodos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<ITodoObj>) {
            state.data.push(action.payload)
        }
    }
})

export const todosReducer = todosSlice.reducer