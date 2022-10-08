import TodoList from '../TodoList.module.css';
import { onCheck, handleDelete } from '../store/features/todos/todosSlice';
import {useDispatch} from 'react-redux'

export const TodoListCard = (props) =>{
    const dispatch = useDispatch();
    const {data, status} = props;
    
    return(
            <div className={!status ? TodoList.card : `${TodoList.card} ${TodoList.completed}`}>
                <header>{data.title}</header>
                <body>
                    <span>
                        <p><strong>Description:</strong></p>
                        {data.description}
                    </span>
                    <div className={TodoList.action}>
                            <label className={TodoList.checkbox}>
                                {!status &&
                                    <input onChange={() =>dispatch(completeTodo(data.id))} type="checkbox" name="" id="" 
                                />}
                                {!status ? 'Mark as Done' : 'Completed'}
                            </label>
                        <button onClick={() => dispatch(handleDelete(data.id))}>Delete</button>
                    </div>
                </body>
            </div>
    )
}