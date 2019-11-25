import axios from 'axios';
import AuthService from '../service/AuthService';

const hosts = {
  development: 'http://localhost:8080/'
};

const axiosInstance = axios.create({
    baseURL: hosts[process.env.NODE_ENV]
});


const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false: true
};

// const requestHandler = (request) => {
//     if(isHandlerEnabled(request)) {
//         request.headers.
//     }
// }
// }



const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
        console.log( AuthService.getUserInfo());

      request.headers['Authorization'] = AuthService.getAuthorization();

    }
    return request
  }

  axiosInstance.interceptors.request.use(
    request => requestHandler(request)
  )

export default axiosInstance;