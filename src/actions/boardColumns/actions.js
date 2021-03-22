import {
  createNewColumn,
  createNewColumnFailed,
  createNewColumnSuccess,
  deleteColumn,
  deleteColumnFailed,
  deleteColumnSuccess,
  getBoardColumns,
  getBoardColumnsFailed,
  getBoardColumnsSuccess,
  updateColumn,
  updateColumnFailed,
  updateColumnSuccess
} from './actionCreators';
import { columnsAPI } from '../../API';
import getMessage from '../../utils/getErrorMessage';

export const createColumn = (title, boardId) => async (dispatch) => {
  try {
    dispatch(createNewColumn());
    const response = await columnsAPI.createNewColumnAPI(title, boardId);
    const refreshColumns = await columnsAPI.getBoardColumnsAPI(boardId);
    dispatch(getBoardColumnsSuccess(refreshColumns.data));
    dispatch(createNewColumnSuccess(response.data));
  }
  catch (error) {
    dispatch(createNewColumnFailed(getMessage(error)));
  }
}

export const getColumns = (boardId) => async (dispatch) => {
  try {
    dispatch(getBoardColumns());
    const response = await columnsAPI.getBoardColumnsAPI(boardId);
    dispatch(getBoardColumnsSuccess(response.data));
  }
  catch (error) {
    dispatch(getBoardColumnsFailed(getMessage(error)));
  }
}

export const removeColumn = (columnId, boardId) => async (dispatch) => {
  try {
    dispatch(deleteColumn())
    const response = await columnsAPI.deleteColumnAPI(columnId);
    const refreshColumns = await columnsAPI.getBoardColumnsAPI(boardId);
    dispatch(getBoardColumnsSuccess(refreshColumns.data));
    dispatch(deleteColumnSuccess(response.data));
  }
  catch (error) {
    dispatch(deleteColumnFailed(getMessage(error)))
  }
}

export const updateColumnTitle = (columnId, title, boardId) => async (dispatch) => {
  try {
    dispatch(updateColumn())
    const response = await columnsAPI.updateColumnAPI(columnId, title);
    const refreshColumns = await columnsAPI.getBoardColumnsAPI(boardId);
    dispatch(getBoardColumnsSuccess(refreshColumns.data));
    dispatch(updateColumnSuccess(response.data));
  }
  catch (error) {
    dispatch(updateColumnFailed(getMessage(error)))
  }
}
