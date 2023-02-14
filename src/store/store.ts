import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { hideCheckboxReducer } from "./hideCheckbox";
import { todosReducer } from "./todo";
import { todoApi } from "./todoapi/todo.api";

export const store = configureStore({
    reducer: {
        alltodos: todosReducer,
        hidecheckbox: hideCheckboxReducer,
        [todoApi.reducerPath]: todoApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(todoApi.middleware)
})

export type RootType = ReturnType<typeof store.getState>