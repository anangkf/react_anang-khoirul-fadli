import TodoListStyle from '../TodoList.module.css';
import { TodoListCard } from "./TodoListCard"
import { TodoUtils } from './TodoUtils';
import { FormModal } from './FormModal';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchTodo } from '../store/features/todos/todosSlice';

export const TodoList = () =>{
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.data)
    const modalTrigger = useSelector(state => state.modal)

    const [fetchStatus, setFetchStatus] = useState(false);
    const [keyword, setKeyword] = useState('');

    const handleFetchStatus = () =>{
        setFetchStatus(!fetchStatus)
    }
    const data = todos.filter(item =>{
        if(!keyword){
            return item
        }else if(
            item.title
            .toLowerCase()
            .includes(keyword)
        ){
            return item
        }
    })
    
    const handleSearch = (e) =>{
        const input = e.target.value.toLowerCase();
        setKeyword(input)
    }
    
    useEffect(() =>{
        dispatch(fetchTodo())
    },[fetchStatus])

    return(
        <>
            <TodoUtils 
                handleSearch={handleSearch}
                modalTrigger={modalTrigger}
            />
            {modalTrigger && <FormModal handleFetchStatus={handleFetchStatus}/>}
            <div className={TodoListStyle.container}>
                {data.map(item =>{
                    const {id, completed} = item;
                    return(
                        <TodoListCard 
                            key={id}
                            data={item}
                            status={completed}
                        />
                        )
                    }
                )}
            </div>
        </>
    )
};