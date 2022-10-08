import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import APITodo from '../../../apis/todo.api';

const initialState = {
    data: [],
    fetchStatus: false
};

export const fetchTodo = createAsyncThunk('fetch/todo', async () =>{
    try{
        const res = await APITodo.getAllTodo();
        return res.data.todo_todo
    }catch(err){
        console.log(err.message)
    }
})

export const addTodo = createAsyncThunk('add/todo', async (data) =>{
    try{
        const res = await APITodo.addTodo({
            data: data
        })
        return res.data.insert_todo_todo_one
    }catch(err){
        console.log(err.message)
    }
})

export const completeTodo = createAsyncThunk('complete/todo', async (data) =>{
    try{
        const res = await APITodo.completeTodo(data)
        return res
    }catch(err){
        console.log(err.message)
    }
})

export const deleteTodo = createAsyncThunk('delete/todo', async(id) =>{
    try{
        const res = await APITodo.deleteTodo(id)
        return res
    }catch(err){
        console.log(err.response.data)
    }
})

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    extraReducers(builder){
        builder
            .addCase(fetchTodo.fulfilled, (state, action) =>{
                state.data = action.payload;
            })
            .addCase(addTodo.fulfilled, (state, action) =>{
                state.data.unshift(action.payload)
                state.fetchStatus = !state.fetchStatus
            })
            .addCase(completeTodo.fulfilled, (state) =>{
                state.fetchStatus = !state.fetchStatus
            })
            .addCase(deleteTodo.fulfilled, (state) =>{
                state.fetchStatus = !state.fetchStatus
            })
    },
    reducers:{
        handleDelete: (state, action) =>{
            const id = action.payload
            
            let newTodo = state.data.filter((item) => item.id !== id)
            
            state.data = newTodo
            return state
        },
    }
})
export const {onCheck, handleDelete, handleSubmit, handleFetchStatus} = todosSlice.actions

export default todosSlice.reducer