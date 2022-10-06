import { combineReducers } from "@reduxjs/toolkit";
import counter from './counter/counterSlice'
import todo from "./todo/fetchTodoSlice";

const rootReducers = combineReducers({
    counter,
    todo

})

export default rootReducers;