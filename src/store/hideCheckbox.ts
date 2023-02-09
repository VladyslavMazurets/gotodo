import { createSlice } from "@reduxjs/toolkit";

const HIDE_BOX = 'HIDE_BOX_CHECK'

const initialState = {
    hide: JSON.parse(localStorage.getItem(HIDE_BOX) ?? 'false')
}

export const hideCheckboxSlice = createSlice({
    name: 'hidecheckbox',
    initialState,
    reducers: {
        hideDone(state, action) {
            state.hide = action.payload
            return localStorage.setItem(HIDE_BOX, JSON.stringify(state.hide))
        }
    }
})

export const hideCheckboxReducer = hideCheckboxSlice.reducer
export const hideCheckboxAction = hideCheckboxSlice.actions