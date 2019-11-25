import axios from 'axios';
import AuthService from '../service/AuthService';

const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') return 'http://localhost:8080/';
  //default build = ""
};

const axiosInstance = axios.create({
    baseURL: getBaseUrl()
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