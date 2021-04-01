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
  moveColumn
} from './actionCreators';
import { columnsAPI, cardsAPI } from '../../API';
import getMessage from '../../utils/getErrorMessage';

export const createColumn = (title, boardId) => async (dispatch) => {
  try {
    dispatch(createNewColumn());
    const response = await columnsAPI.createNewColumn(title, boardId);
    const refreshColumns = await columnsAPI.getBoardColumns(boardId);
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
    const response = await columnsAPI.getBoardColumns(boardId);
    dispatch(getBoardColumnsSuccess(response.data));
  }
  catch (error) {
    dispatch(getBoardColumnsFailed(getMessage(error)));
  }
}

export const removeColumn = (columnId, boardId) => async (dispatch) => {
  try {
    dispatch(deleteColumn())
    const response = await columnsAPI.deleteColumn(columnId, boardId);
    const refreshColumns = await columnsAPI.getBoardColumns(boardId);
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
    const response = await columnsAPI.updateColumn(columnId, title);
    const refreshColumns = await columnsAPI.getBoardColumns(boardId);
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
    const response = await cardsAPI.createCard(title, description, columnId, boardId);
    const refreshColumns = await columnsAPI.getBoardColumns(boardId);
    dispatch(getBoardColumnsSuccess(refreshColumns.data));
    dispatch(createCardSuccess(response.data))
  }
  catch (error) {
    dispatch(createCardFailed(getMessage(error)));
  }
}

export const deleteColumnCard = (id, columnId, boardId) => async (dispatch) => {
  try {
    dispatch(deleteCard());
    const response = await cardsAPI.deleteCard(id, columnId);
    const refreshColumns = await columnsAPI.getBoardColumns(boardId);
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
    const response = await cardsAPI.updateCard(id, title, description);
    const refreshColumns = await columnsAPI.getBoardColumns(boardId);
    dispatch(getBoardColumnsSuccess(refreshColumns.data));
    dispatch(updateCardSuccess(response.data))
  }
  catch (error) {
    dispatch(updateCardFailed(getMessage(error)));
  }
}

export const changeColumnOrder = (dragId, dropId, boardId) => async (dispatch) => {
  try {
    await columnsAPI.columnMove(dragId, dropId, boardId);
    const refreshColumns = await columnsAPI.getBoardColumns(boardId);
    dispatch(getBoardColumnsSuccess(refreshColumns.data));
    dispatch(moveColumn());
  }
  catch (error) {
    console.log(error);
  }
}

export const changeCardPosition = (dragId, dropId, dragColumnId, dropColumnId, side, boardId) => async (dispatch) => {
  try {
    await cardsAPI.cardMove(dragId, dropId, dragColumnId, dropColumnId, side);
    const refreshColumns = await columnsAPI.getBoardColumns(boardId);
    dispatch(getBoardColumnsSuccess(refreshColumns.data));
  }
  catch (error) {
    console.log(error);
  }
}
