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

export const getUserBoardsSuccess = (userBoards) => ({
  type: types.GET_USER_BOARDS,
  payload: userBoards,
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

export const inviteUserOnBoard = (response) => ({
  type: types.INVITE_USER_ON_BOARD,
  payload: response
})

export const fetchBoardUsers = (response) => ({
  type: types.GET_BOARD_USERS,
  payload: response,
})
