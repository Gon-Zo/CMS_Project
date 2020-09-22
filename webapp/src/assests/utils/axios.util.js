import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

axios.defaults.timeout = 10000

axios.interceptors.request.use(request => {
    console.log('request', request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('response', response);
    return response;
}, error => {
    return Promise.reject(error);
});
