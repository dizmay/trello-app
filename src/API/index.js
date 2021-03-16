import axios from 'axios';

const baseURL = process.env.NODE_ENV === "development" ? 'http://localhost:8080/' : "https://trello-app-back.herokuapp.com/";

export const authAPI = {
  createUser(userData) {
    return axios.post(`${baseURL}api/signup`, userData);
  },

  loginUser(userData) {
    return axios.post(`${baseURL}api/signin`, userData);
  },

  verify() {
    return axios.get(`${baseURL}api/verify`);
  }
}

export const userBoardsAPI = {
  createBoard(boardData) {
    return axios.post(`${baseURL}api/boards/create`, boardData);
  },

  requestUserBoards() {
    return axios.get(`${baseURL}api/boards/get`);
  },

  deleteBoard(id) {
    return axios.delete(`${baseURL}api/boards/delete`, { data: { id } });
  }
}
