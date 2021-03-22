import types from './types';

export const createNewColumn = () => ({
  type: types.CREATE_NEW_COLUMN
})

export const createNewColumnSuccess = (message) => ({
  type: types.CREATE_NEW_COLUMN_SUCCESS,
  payload: message
})

export const createNewColumnFailed = (error) => ({
  type: types.CREATE_NEW_COLUMN_FAILED,
  payload: error
})

export const getBoardColumns = () => ({
  type: types.GET_BOARD_COLUMNS
})

export const getBoardColumnsSuccess = (columns) => ({
  type: types.GET_BOARD_COLUMNS_SUCCESS,
  payload: columns
})

export const getBoardColumnsFailed = (error) => ({
  type: types.GET_BOARD_COLUMNS_FAILED,
  payload: error
})

export const deleteColumn = () => ({
  type: types.DELETE_COLUMN
})

export const deleteColumnSuccess = (message) => ({
  type: types.DELETE_COLUMN_SUCCESS,
  payload: message
})

export const deleteColumnFailed = () => ({
  type: types.DELETE_COLUMN_FAILED
})

export const updateColumn = () => ({
  type: types.UPDATE_COLUMN
})

export const updateColumnSuccess = (message) => ({
  type: types.UPDATE_COLUMN_SUCCESS,
  payload: message
})

export const updateColumnFailed = (error) => ({
  type: types.UPDATE_COLUMN_FAILED,
  payload: error
})
