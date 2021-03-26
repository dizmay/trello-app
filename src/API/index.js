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
  createNewColumnAPI(title, boardId) {
    return axios.post(`${baseURL}api/board-columns`, { title, boardId })
  },
  
  getBoardColumnsAPI(boardId) {
    return axios.get(`${baseURL}api/board-columns`, { params: { boardId } })
  },

  deleteColumnAPI(columnId) {
    return axios.delete(`${baseURL}api/board-columns`, { params: { columnId } })
  },

  updateColumnAPI(columnId, title) {
    return axios.put(`${baseURL}api/board-columns`, { columnId, title })
  },

  columnDragAPI(dragId, dropId, boardId) {
    return axios.put(`${baseURL}api/board-columns/dnd`, { dragId, dropId, boardId })
  },
}

export const cardsAPI = {
  createCardAPI(title, description, columnId) {
    return axios.post(`${baseURL}api/columns-tasks`, { title, description, columnId })
  },

  deleteCardAPI(id) {
    return axios.delete(`${baseURL}api/columns-tasks`, { params: { id } })
  },

  updateCardAPI(id, title, description) {
    return axios.put(`${baseURL}api/columns-tasks`, { id, title, description })
  }
}
