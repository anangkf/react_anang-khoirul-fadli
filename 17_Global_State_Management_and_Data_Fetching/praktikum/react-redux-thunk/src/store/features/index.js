import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from './todos/todosSlice'
import modalReducer from './modal/modalSlice'
import sidebarReducer from './sidebar/sidebarSlice'

export const rootReducer = combineReducers({
    todos: todosReducer,
    modal: modalReducer,
    sidebar: sidebarReducer
})