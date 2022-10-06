import TodoList from "../TodoList.module.css";
import { addTodo } from "../store/features/todos/todosSlice";
import { handleModalTrigger } from "../store/features/modal/modalSlice";
import { useDispatch } from "react-redux";

export const FormModal = ({handleFetchStatus}) =>{
    const dispatch = useDispatch();

    const getFormData = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const title = formData.get("title");
        const description = formData.get("description");
        
        dispatch(addTodo({title, description}))
        handleFetchStatus()
        dispatch(handleModalTrigger())
    }
    return(
        <div className={TodoList.modal}>
            <header>Add Todo</header>
            <form onSubmit={getFormData}>
                <table>
                    <tr>
                        <td>
                            <label htmlFor="title">Title</label>
                        </td>
                        <td>
                            <input type="text" id="title" name="title" maxLength={18} required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="description">Description</label>
                        </td>
                        <td>
                            <textarea id="description" name="description" rows="4" cols="32" maxLength={50} required>
                            </textarea>
                        </td>
                    </tr>
                </table>
                <div className={TodoList.modalAction}>
                    <button onClick={() => dispatch(handleModalTrigger())}>Cancel</button>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}