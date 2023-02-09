import { configureStore } from "@reduxjs/toolkit";
import { hideCheckboxReducer } from "./hideCheckbox";
import { todosReducer } from "./todo";

export const store = configureStore({
    reducer: {
        alltodos: todosReducer,
        hidecheckbox: hideCheckboxReducer
    }
})

export type RootType = ReturnType<typeof store.getState>