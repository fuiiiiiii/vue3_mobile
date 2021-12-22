import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axios = Axios.create({
    timeout: 10000,
    baseURL: '/'
});

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers) {
        config.headers.token = localStorage["token"];
        config.headers.brand = '2';
        if(localStorage['userToken']) {
            config.headers.userToken = localStorage['userToken']
        };
    }
    return config;
}, (error: any) => {

});


axios.interceptors.response.use((response: AxiosResponse) => {
    if (response) {
        console.log(response)
        return response.data;
    }
}, (error: any) => {

})

export default axios;