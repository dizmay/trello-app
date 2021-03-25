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
  updateColumnSuccess,
  createCard,
  createCardFailed,
  createCardSuccess,
  deleteCard,
  deleteCardFailed,
  deleteCardSuccess,
  updateCard,
  updateCardFailed,
  updateCardSuccess,
  dragColumn
} from './actionCreators';
import { columnsAPI, cardsAPI } from '../../API';
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

export const createNewCard = (title, description, columnId, boardId) => async (dispatch) => {
  try {
    dispatch(createCard());
    const response = await cardsAPI.createCardAPI(title, description, columnId);
    const refreshColumns = await columnsAPI.getBoardColumnsAPI(boardId);
    dispatch(getBoardColumnsSuccess(refreshColumns.data));
    dispatch(createCardSuccess(response.data))
  }
  catch (error) {
    dispatch(createCardFailed(getMessage(error)));
  }
}

export const deleteColumnCard = (id, boardId) => async (dispatch) => {
  try {
    dispatch(deleteCard());
    const response = await cardsAPI.deleteCardAPI(id);
    const refreshColumns = await columnsAPI.getBoardColumnsAPI(boardId);
    dispatch(getBoardColumnsSuccess(refreshColumns.data));
    dispatch(deleteCardSuccess(response.data))
  }
  catch (error) {
    dispatch(deleteCardFailed(getMessage(error)));
  }
}

export const updateColumnCard = (id, title, description, boardId) => async (dispatch) => {
  try {
    dispatch(updateCard());
    const response = await cardsAPI.updateCardAPI(id, title, description);
    const refreshColumns = await columnsAPI.getBoardColumnsAPI(boardId);
    dispatch(getBoardColumnsSuccess(refreshColumns.data));
    dispatch(updateCardSuccess(response.data))
  }
  catch (error) {
    dispatch(updateCardFailed(getMessage(error)));
  }
}

export const columnDnD = (dragOrder, prevDropOrder, dropOrder, nextDropOrder, boardId) => async (dispatch) => {
  try {
    const response = await columnsAPI.columnDragAPI(dragOrder, prevDropOrder, dropOrder, nextDropOrder);
    const refreshColumns = await columnsAPI.getBoardColumnsAPI(boardId);
    dispatch(getBoardColumnsSuccess(refreshColumns.data));
    dispatch(dragColumn());
  }
  catch (error) {
    console.log(error);
  }
}
