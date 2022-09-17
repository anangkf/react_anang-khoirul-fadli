import Header from '../components/Header'
import { mockTodos } from '../mockDatas';
import TodoList from '../components/TodoList'

const Todos = () =>{
    return(
        <>
            <Header title={'To Do App'}/>
            {mockTodos.map((item) =>{
                console.log(item)
                return(
                    <TodoList data={item} />
                )
            })
            }
        </>
    )
}
export default Todos;