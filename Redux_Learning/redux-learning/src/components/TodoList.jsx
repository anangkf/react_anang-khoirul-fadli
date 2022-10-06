import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from '../store/features/todo/fetchTodoSlice'

const TodoList = () => {
    const dispatch = useDispatch()
    const todo = useSelector((state) => state.todo)
    console.log(todo);
    useEffect(() =>{
        dispatch(fetchTodo())
    }, [])

  return (
    <div>
      <h1>Todo List</h1>
      {todo.data?.map(item =>{
        return(
          <li key={item.id}>{item.title} <br />
            {item.description}          
          </li>
        )
      })}
    </div>
  )
}

export default TodoList