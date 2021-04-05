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
    return axios.delete(`${baseURL}api/boards/`, { params: { id } });
  },

  inviteUser(username, boardId, userId) {
    return axios.post(`${baseURL}api/invite-board`, { username, boardId, userId });
  },

  fetchUsersOfBoard(boardId) {
    return axios.post(`${baseURL}api/users-boards`, boardId)
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

export const columnsAPI = {
  createNewColumn(title, boardId) {
    return axios.post(`${baseURL}api/board-columns`, { title, boardId })
  },

  getBoardColumns(boardId) {
    return axios.get(`${baseURL}api/board-columns`, { params: { boardId } })
  },

  deleteColumn(columnId, boardId) {
    return axios.delete(`${baseURL}api/board-columns`, { params: { columnId, boardId } })
  },

  updateColumn(columnId, title) {
    return axios.put(`${baseURL}api/board-columns`, { columnId, title })
  },

  columnMove(dragId, dropId, boardId) {
    return axios.put(`${baseURL}api/board-columns/move-column`, { dragId, dropId, boardId })
  },
}

export const cardsAPI = {
  createCard(title, description, columnId, boardId) {
    return axios.post(`${baseURL}api/columns-tasks`, { title, description, columnId, boardId })
  },

  deleteCard(id, columnId) {
    return axios.delete(`${baseURL}api/columns-tasks`, { params: { id, columnId } })
  },

  updateCard(id, title, description) {
    return axios.put(`${baseURL}api/columns-tasks`, { id, title, description })
  },

  cardMove(dragId, dropId, dragColumnId, dropColumnId, side) {
    return axios.put(`${baseURL}api/columns-tasks/move-card`, { dragId, dropId, dragColumnId, dropColumnId, side })
  },

  assignUserToCard(taskId, userId, boardId, columnId) {
    return axios.post(`${baseURL}api/assign-user`, { taskId, userId, boardId, columnId })
  },

  cancelUserAssignment(taskId, userId, boardId) {
    return axios.delete(`${baseURL}api/assign-user`, { params: { taskId, userId, boardId } })
  }
}
