import { axiosInstance } from '../configs/axiosInstance';

const APITodo = {
    async getAllTodo() {
        try{
            const res = await axiosInstance.get('/todo')
            return res
        }catch(err){
            console.log(err.message)
        }
    },

    async addTodo(data){
        try{
            const res = await axiosInstance.post('/todo',data)
            return res
        }catch(err){
            console.log(err.message)
        }
    },

    async completeTodo(data){
        try{
            const res = await axiosInstance.patch(`/todo/${data}`, {
                id: data,
                completed: true
            })
            return res
        }catch(err){
            console.log(err.response)
        }
    },

    }
}

export default APITodo;
