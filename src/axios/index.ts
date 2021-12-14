import Axios, { AxiosRequestConfig } from "axios";

const axios = Axios.create({
    timeout: 10000,
    baseURL: '/'
});

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers) {
        config.headers.token = localStorage["token"]
    }
    return config;
});

export default axios;