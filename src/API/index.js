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
    return axios.post(`${baseURL}api/boards/`, boardData);
  },

  requestUserBoards() {
    return axios.get(`${baseURL}api/boards/`);
  },

  deleteBoard(id) {
    return axios.delete(`${baseURL}api/boards/`, { data: { id } });
  },

  inviteUser(username, boardId, userId) {
    return axios.post(`${baseURL}api/invite-board`, { username, boardId, userId });
  },

  fetchUsersOfBoard(boardId) {
    return axios.post(`${baseURL}api/users-boards/get`, boardId)
  }
}

export const usersAPI = {
  getUserNotifications() {
    return axios.get(`${baseURL}api/invite-board`);
  },

  replyToUserNotification(invId, isAccepted) {
    return axios.post(`${baseURL}api/invite-board/reply`, { invId, isAccepted })
  }
}
