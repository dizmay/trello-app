import types from './types';

export const createNewColumn = () => ({
  type: types.CREATE_NEW_COLUMN
})

export const createNewColumnSuccess = (response) => ({
  type: types.CREATE_NEW_COLUMN_SUCCESS,
  payload: response
})

export const createNewColumnFailed = (error) => ({
  type: types.CREATE_NEW_COLUMN_FAILED,
  payload: error
})

export const getBoardColumns = () => ({
  type: types.GET_BOARD_COLUMNS
})

export const getBoardColumnsSuccess = (response) => ({
  type: types.GET_BOARD_COLUMNS_SUCCESS,
  payload: response
})

export const getBoardColumnsFailed = (response) => ({
  type: types.GET_BOARD_COLUMNS_FAILED,
  payload: response
})

export const deleteColumn = () => ({
  type: types.DELETE_COLUMN
})

export const deleteColumnSuccess = (response) => ({
  type: types.DELETE_COLUMN_SUCCESS,
  payload: response
})

export const deleteColumnFailed = () => ({
  type: types.DELETE_COLUMN_FAILED
})

export const updateColumn = () => ({
  type: types.UPDATE_COLUMN
})

export const updateColumnSuccess = (response) => ({
  type: types.UPDATE_COLUMN_SUCCESS,
  payload: response
})

export const updateColumnFailed = (response) => ({
  type: types.UPDATE_COLUMN_FAILED,
  payload: response
})
