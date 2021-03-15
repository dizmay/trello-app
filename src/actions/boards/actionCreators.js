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
