import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todo";

export const store = configureStore({
    reducer: {
        alltodos: todosReducer
    }
})

export type RootType = ReturnType<typeof store.getState>