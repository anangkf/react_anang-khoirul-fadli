import TodoList from '../TodoList.module.css';

export const TodoListCard = (props) =>{
    const {data, status, onCheck, handleDelete} = props;
    
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
                                    <input onChange={() =>onCheck(data.id)} type="checkbox" name="" id="" 
                                />}
                                {!status ? 'Mark as Done' : 'Completed'}
                            </label>
                        <button onClick={() => handleDelete(data.id)}>Delete</button>
                    </div>
                </body>
            </div>
    )
}