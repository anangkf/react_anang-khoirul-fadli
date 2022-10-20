import {CONST} from '../../utils/constant'
import axios from 'axios'

const config = {
    baseURL: CONST.BASE_URL,
    headers:{
        'x-hasura-admin-secret': CONST.ADMIN_SECRET
    }
}

const axiosInstance = axios.create(config)

export default axiosInstance;