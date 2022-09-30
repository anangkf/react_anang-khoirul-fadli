import TodoList from "../TodoList.module.css"
import { handleModalTrigger } from "../store/modal/modalSlice";
import { useSelector, useDispatch } from "react-redux";

export const TodoUtils = (props) =>{
    const {handleSearch} = props;
    
    const modalTrigger = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const addTodo = (e) =>{
        e.preventDefault()
        dispatch(handleModalTrigger())
    }
    return(
        <div className={TodoList.utils}>
            <input 
                type="text"
                onChange={handleSearch} 
                placeholder="search todos..." 
            />
            <button onClick={addTodo} disabled={modalTrigger}>Add Todo</button>
        </div>
    )
}