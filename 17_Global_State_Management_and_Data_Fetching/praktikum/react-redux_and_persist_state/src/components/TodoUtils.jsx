import TodoList from "../TodoList.module.css"

export const TodoUtils = (props) =>{
    const {handleSearch, handleModalTrigger, modalTrigger} = props;
    return(
        <div className={TodoList.utils}>
            <input 
                type="text"
                onChange={handleSearch} 
                placeholder="search todos..." 
            />
            <button onClick={handleModalTrigger} disabled={modalTrigger}>Add Todo</button>
        </div>
    )
}