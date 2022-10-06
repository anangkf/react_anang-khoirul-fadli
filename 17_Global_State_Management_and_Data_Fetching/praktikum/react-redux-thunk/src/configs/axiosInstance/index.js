import CONST from '../../utils/constants';
import axios from 'axios';

const config = {
    baseURL: CONST.BASE_URL,
    headers:{
        'x-hasura-admin-secret': CONST.HASURA_ADMIN_SECRET
    }
}

export const axiosInstance = axios.create(config);