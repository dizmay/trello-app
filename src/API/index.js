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

export const createBoardAPI = {
  createBoard(boardData) {
    return axios.post(`${baseURL}api/boards/create`, boardData);
  }
}

export const getUserBoardsAPI = {
  requestUserBoards() {
    return axios.get(`${baseURL}api/boards/get`);
  }
}

export const verifyTokenAPI = {
  verify() {
    return axios.get(`${baseURL}api/verify`);
  }
}
