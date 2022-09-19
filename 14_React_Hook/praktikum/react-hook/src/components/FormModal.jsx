import TodoList from "../TodoList.module.css";

export const FormModal = (props) =>{
    const {handleModalTrigger, handleSubmit} = props;
    return(
        <div className={TodoList.modal}>
            <header>Add Todo</header>
            <form onSubmit={handleSubmit}>
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
                    <button onClick={handleModalTrigger}>Cancel</button>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}