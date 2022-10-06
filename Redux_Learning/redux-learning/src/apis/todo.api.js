// import axios from 'axios'
import axiosInstance from '../configs/axiosInstance'

const APITodo = {
    async getAllTodo() {
        // await axiosInstance.get('todo')
        //     .then(res =>{
        //         console.log(res)
        //     })
        //     .catch(err =>{
        //         console.log(err)
        //     })
        try{
            const res = await axiosInstance.get('/todo')
            return res
        }catch(err){
            console.log(err)
        }
    }
}

export default APITodo;