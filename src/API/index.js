import axios from 'axios';

const baseURL = process.env.NODE_ENV === "development" ? 'http://localhost:8080/' : "https://trello-app-back.herokuapp.com/";

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
