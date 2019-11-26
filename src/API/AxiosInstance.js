import React from 'react';
import axios from 'axios';
import AuthService from '../service/AuthService';
import Text from '../components/Text';

const hosts = {
    development: 'http://localhost:8080/'
};

const axiosInstance = axios.create({
    baseURL: hosts[process.env.NODE_ENV]
});


const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true
};

const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
        console.log(AuthService.getUserInfo());

        request.headers['Authorization'] = AuthService.getAuthorization();

    }
    return request
};

const errorHandler = (error) => {
    if (isHandlerEnabled(error.config)) {
        if (error.response && error.response.data) {
            //alert(error.response.data.message);
            return (
                <Text>{error.response.data.message}</Text>
            )
        }
    }
    return Promise.reject({ ...error })
};

axiosInstance.interceptors.request.use(
    request => requestHandler(request)
);
axiosInstance.interceptors.response.use(response => response, error => errorHandler(error));

export default axiosInstance;
