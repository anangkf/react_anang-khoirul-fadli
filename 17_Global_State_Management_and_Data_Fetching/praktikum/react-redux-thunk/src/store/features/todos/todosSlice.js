import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import APITodo from '../../../apis/todo.api';

const initialState = {
    data: []
};

export const fetchTodo = createAsyncThunk('fetch/todo', async () =>{
    try{
        const res = await APITodo.getAllTodo();
        return res.data.todo_todo
    }catch(err){
        console.log(err.message)
    }
})

export const addTodo = createAsyncThunk('add/todo', ({title, description}) =>{
    APITodo.addTodo({
        data:{
            title,
            description
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
})

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    extraReducers(builder){
        builder
            .addCase(fetchTodo.fulfilled, (state, action) =>{
                state.data = action.payload;
            })
    },
    reducers:{
        onCheck: (state, action) =>{
            const id = action.payload;
            
            state.data.filter(val =>{
                if(val.id === id){
                    return val.completed = !val.completed
                }
                return val
            })
        },
        handleDelete: (state, action) =>{
            const id = action.payload
            
            let newTodo = state.data.filter((item) => item.id !== id)
            
            state.data = newTodo
            return state
        },
    }
})
export const {onCheck, handleDelete, handleSubmit} = todosSlice.actions

export default todosSlice.reducer