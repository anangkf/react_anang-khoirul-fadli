import TodoListStyle from '../TodoList.module.css';
import { mockTodos } from '../mock/mockTodos';
import { TodoListCard } from "./TodoListCard"
import { TodoUtils } from './TodoUtils';

import { useEffect, useState } from 'react';
import { FormModal } from './FormModal';

export const TodoList = () =>{

    const [todos, setTodos] = useState(mockTodos);
    const [currentID, setCurrentID] = useState();
    const [modalTrigger, setModalTrigger] = useState(false);

    const handleSearch = (e) =>{
        const keyword = e.target.value.toLowerCase();

        const results = todos.filter(todo =>{
            return todo.title.toLowerCase().includes(keyword);
        })
        setTodos(results);
    }

    const handleModalTrigger = (e) =>{
        e.preventDefault();
        setModalTrigger(!modalTrigger);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get("title");
        const description = formData.get("description");
        const todo = {
            id: currentID + 1,
            title: title,
            description: description,
            completed: false,
        }

        setTodos([...todos, todo]);
        setModalTrigger(false);
    }

    const onCheck = (id) =>{
        let newTodos = [];
        for(let todo of todos){
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            newTodos.push(todo);
        }
        setTodos(newTodos);
    }

    const handleDelete = (id) =>{
        let newTodos = todos.filter((list) =>{
            return list.id !== id;
        })
        setTodos(newTodos);
    }

    useEffect(() =>{
        const lastId =Number(todos[todos.length - 1].id);
        setCurrentID(lastId);
    },[todos])

    return(
        <>
            <TodoUtils 
                handleSearch={handleSearch}
                handleModalTrigger={handleModalTrigger}
                modalTrigger={modalTrigger}
            />
            {modalTrigger && <FormModal
                handleModalTrigger={handleModalTrigger}
                handleSubmit={handleSubmit}
            />}
            <div className={TodoListStyle.container}>
                {todos.map(item =>{
                    const {id, completed} = item;
                    return(
                        <TodoListCard 
                        key={id}
                        data={item}
                        status={completed}
                            onCheck={onCheck}
                            handleDelete={handleDelete}
                            />
                        )
                    }
                )}
            </div>
        </>
    )
};