import types from './types';

export const createNewBoard = () => ({
  type: types.CREATE_NEW_BOARD,
})

export const createBoardSuccess = (message) => ({
  type: types.CREATE_NEW_BOARD_SUCCESS,
  payload: message,
})

export const createBoardFail = (message) => ({
  type: types.CREATE_BOARD_FAILED,
  payload: message,
})

export const getUserBoardsAC = () => ({
  type: types.GET_USER_BOARDS,
})

export const getUserBoardsSuccess = (userBoards) => ({
  type: types.GET_USER_BOARDS_SUCCESS,
  payload: userBoards,
})

export const getUserBoardsFailed = () => ({
  type: types.GET_USER_BOARDS_FAILED,
})

export const deleteUserBoard = () => ({
  type: types.DELETE_BOARD,
})

export const deleteUserBoardSuccess = (isDeleted) => ({
  type: types.DELETE_BOARD_SUCCESS,
  payload: isDeleted,
})

export const deleteUserBoardFailed = (isDeleted) => ({
  type: types.DELETE_BOARD_FAILED,
  payload: isDeleted,
})

export const inviteUserOnBoard = () => ({
  type: types.INVITE_USER_ON_BOARD,
})

export const inviteUserOnBoardSuccess = (response) => ({
  type: types.INVITE_USER_ON_BOARD_SUCCESS,
  payload: response
})

export const inviteUserOnBoardFailed = (response) => ({
  type: types.INVITE_USER_ON_BOARD_FAILED,
  payload: response
})

export const fetchBoardUsers = (response) => ({
  type: types.GET_BOARD_USERS,
  payload: response,
})
