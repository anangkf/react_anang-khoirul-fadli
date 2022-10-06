import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APITodo from "../../../apis/todo.api";

export const fetchTodo = createAsyncThunk('fetch/todo', async () =>{
    try{
        const res = await APITodo.getAllTodo();
        return res.data
    }catch(err){
        console.log(err.message)
    }
});

const initialState = {
    data: [],
}

const fetchTodoSlice = createSlice({
    name: 'todo',
    initialState,
    extraReducers(builder){
        builder
            .addCase(fetchTodo.fulfilled, (state, action) =>{
                state.data = action.payload.todo_todo
            })
            // .addCase(fetchTodo.rejected, (state, action) =>{
                
            // })
    }
})

export default fetchTodoSlice.reducer;