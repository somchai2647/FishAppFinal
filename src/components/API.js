import Axios from "axios";

let API = Axios.create({
    baseURL: 'http://192.168.1.119:7788',
    timeout: 10000,
});

export const setClientToken = token => {
    API.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${token}`
        return config;
    });
}

export default API;