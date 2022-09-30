import {combineReducers, configureStore} from '@reduxjs/toolkit'
import todosReducer from './todos/todosSlice'
import modalReducer from './modal/modalSlice'
import sidebarReducer from './sidebar/sidebarSlice'

const rootReducer = combineReducers({
    todos: todosReducer,
    modal: modalReducer,
    sidebar: sidebarReducer
})

export default configureStore({
    reducer: rootReducer
})