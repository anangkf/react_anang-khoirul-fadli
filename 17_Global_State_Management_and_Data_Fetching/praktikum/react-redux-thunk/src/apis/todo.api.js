import axios from 'axios';
import { axiosInstance } from '../configs/axiosInstance';

const APITodo = {
    async getAllTodo() {
        try{
            const res = await axiosInstance.get('/todo')
            return res
            // console.log(res)
        }catch(err){
            console.log(err.message)
        }
    }
}

export default APITodo;
