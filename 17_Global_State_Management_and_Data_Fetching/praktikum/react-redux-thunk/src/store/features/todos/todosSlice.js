import {createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import APITodo from '../../../apis/todo.api';
import { mockTodos } from '../../../mock/mockTodos'

const initialState = {
    data: []
};

export const fetchTodo = createAsyncThunk('fetch/todo', async () =>{
    try{
        const res = await APITodo.getAllTodo();
        console.log(res.data)
        return res.data.todo_todo
    }catch(err){
        console.log(err.message)
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
        handleSubmit: (state, action) =>{
            const currentID = state[state.length - 1].id + 1;
            const {title, description} = action.payload
            state.data.push({id: currentID, title , description, completed: false})
            
            return state
        }
    }
})
export const {onCheck, handleDelete, handleSubmit} = todosSlice.actions

export default todosSlice.reducer