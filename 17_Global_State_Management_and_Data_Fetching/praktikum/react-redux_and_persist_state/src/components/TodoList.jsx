import TodoListStyle from '../TodoList.module.css';
import { TodoListCard } from "./TodoListCard"
import { TodoUtils } from './TodoUtils';
import { FormModal } from './FormModal';

import { useState } from 'react';
import { useSelector } from 'react-redux'

export const TodoList = () =>{
    const todos = useSelector(state => state.todos)
    const modalTrigger = useSelector(state => state.modal)

    const [keyword, setKeyword] = useState('');

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

    return(
        <>
            <TodoUtils 
                handleSearch={handleSearch}
                modalTrigger={modalTrigger}
            />
            {modalTrigger && <FormModal />}
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