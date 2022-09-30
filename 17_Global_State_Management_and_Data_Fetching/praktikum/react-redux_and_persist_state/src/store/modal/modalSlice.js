import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: false,
    reducers:{
        handleModalTrigger: (state) =>{
            state = !state
            
            return state
        }
    }
})

export const { handleModalTrigger } = modalSlice.actions

export default modalSlice.reducer