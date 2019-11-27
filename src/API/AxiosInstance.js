import React from 'react';
import axios from 'axios';
import AuthService from '../service/AuthService';

const hosts = {
    development: 'http://localhost:8080/'
};

const isLoggedIn = AuthService.getRole() != null;

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
            alert(error.response.data.message);
            if (isLoggedIn) window.location.href = "/home";
            else window.location.href = "/";
        }
    }
    return Promise.reject({ ...error })
};

axiosInstance.interceptors.request.use(
    request => requestHandler(request)
);
axiosInstance.interceptors.response.use(response => response, error => errorHandler(error));

export default axiosInstance;
