import axios from 'axios';

const baseURL = 'http://localhost:8080/';

export const signupAPI = {
    createUser(userData) {
        return axios.post(`${baseURL}api/signup`, userData);
    }
}

export const signinAPI = {
    loginUser(userData) {
        return axios.post(`${baseURL}api/signin`, userData);
    }
}
