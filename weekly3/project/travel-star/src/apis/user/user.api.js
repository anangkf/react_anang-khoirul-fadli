import axiosInstance from "../../configs/axiosInstance"

const APIUser = {
    async getAllUsers() {
        try{
            const res = await axiosInstance.get('/user')
            return res
        }catch(err){
            console.log(err.response)
        }
    }
}

export default APIUser;