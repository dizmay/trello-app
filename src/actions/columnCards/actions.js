import {
  createCard,
  createCardFailed,
  createCardSuccess,
  deleteCard,
  deleteCardFailed,
  deleteCardSuccess,
  getCards,
  getCardsFailed,
  getCardsSuccess,
  updateCard,
  updateCardFailed,
  updateCardSuccess
} from "./actionCreators";
import { cardsAPI } from '../../API';
import getMessage from '../../utils/getErrorMessage';

export const createNewCard = (title, description, boardId) => async (dispatch) => {
  try {
    dispatch(createCard());
    const response = await cardsAPI.createCardAPI(title, description, boardId);
    const refreshCards = await cardsAPI.getCardsAPI(boardId);
    dispatch(getCardsSuccess(refreshCards.data))
    dispatch(createCardSuccess(response.data))
  }
  catch (error) {
    dispatch(createCardFailed(getMessage(error)));
  }
}

export const getColumnCards = (boardId) => async (dispatch) => {
  try {
    dispatch(getCards());
    const response = await cardsAPI.getCardsAPI(boardId);
    dispatch(getCardsSuccess(response.data))
  }
  catch (error) {
    dispatch(getCardsFailed(getMessage(error)));
  }
}

export const deleteColumnCard = (id, boardId) => async (dispatch) => {
  try {
    dispatch(deleteCard());
    const response = await cardsAPI.deleteCardAPI(id);
    const refreshCards = await cardsAPI.getCardsAPI(boardId);
    dispatch(getCardsSuccess(refreshCards.data))
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
    const refreshCards = await cardsAPI.getCardsAPI(boardId);
    dispatch(getCardsSuccess(refreshCards.data))
    dispatch(updateCardSuccess(response.data))
  }
  catch (error) {
    dispatch(updateCardFailed(getMessage(error)));
  }
}
