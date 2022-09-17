import todoStyles from '../TodoList.module.css'

const TodoList = (props) =>{
    return(
        <div className={todoStyles.container}>
            {props.data.completed
                ? <p className={todoStyles.strikethrough}>{props.data.todo}</p>
                : <p>{props.data.todo}</p>
            }
        </div>
    )
}
export default TodoList;