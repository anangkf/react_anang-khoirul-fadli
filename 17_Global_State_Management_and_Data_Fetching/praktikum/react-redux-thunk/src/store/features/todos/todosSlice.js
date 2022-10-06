import {createSlice } from '@reduxjs/toolkit'
import { mockTodos } from '../../../mock/mockTodos'

const initialState = mockTodos;

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        onCheck: (state, action) =>{
            const id = action.payload;
            
            state.filter(val =>{
                if(val.id === id){
                    return val.completed = !val.completed
                }
                return val
            })
        },
        handleDelete: (state, action) =>{
            const id = action.payload
            
            let newTodo = state.filter((item) => item.id !== id)
            
            state = newTodo
            return state
        },
        handleSubmit: (state, action) =>{
            const currentID = state[state.length - 1].id + 1;
            const {title, description} = action.payload
            state.push({id: currentID, title , description, completed: false})
            
            return state
        }
    }
})
export const {onCheck, handleDelete, handleSubmit} = todosSlice.actions

export default todosSlice.reducer