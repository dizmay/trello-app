import types from './types.js';

export const createCard = () => ({
  type: types.CREATE_CARD,
})

export const createCardSuccess = (message) => ({
  type: types.CREATE_CARD_SUCCESS,
  payload: message
})

export const createCardFailed = (error) => ({
  type: types.CREATE_CARD_FAILED,
  payload: error
})

export const getCards = () => ({
  type: types.GET_CARDS,
})

export const getCardsSuccess = (message) => ({
  type: types.GET_CARDS_SUCCESS,
  payload: message
})

export const getCardsFailed = (error) => ({
  type: types.GET_CARDS_FAILED,
  payload: error
})

export const deleteCard = () => ({
  type: types.DELETE_CARD,
})

export const deleteCardSuccess = (message) => ({
  type: types.DELETE_CARD_SUCCESS,
  payload: message
})

export const deleteCardFailed = (error) => ({
  type: types.DELETE_CARD_FAILED,
  payload: error
})

export const updateCard = () => ({
  type: types.UPDATE_CARD,
})

export const updateCardSuccess = (message) => ({
  type: types.UPDATE_CARD_SUCCESS,
  payload: message
})

export const updateCardFailed = (error) => ({
  type: types.UPDATE_CARD_FAILED,
  payload: error
})