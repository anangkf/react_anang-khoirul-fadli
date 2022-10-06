import axios from 'axios'
import CONST from '../../utils/constants'

const config = {
    baseURL: CONST.BASE_URL_API,
    headers:{
        "x-hasura-admin-secret": CONST.HASURA_ADMIN_SECRET,
    },
};

const axiosInstance = axios.create(config);

export default axiosInstance;
