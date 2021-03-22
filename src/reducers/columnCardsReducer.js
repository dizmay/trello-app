import types from '../actions/columnCards/types';

const initialState = {
  isLoading: false,
  isError: false,
  error: '',
  cards: [],
}

const boardColumnsReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.CREATE_CARD:
      return { ...state, isLoading: true }

    case types.CREATE_CARD_SUCCESS:
      return { ...state, isLoading: false, isError: false, error: action.payload }

    case types.CREATE_CARD_FAILED:
      return { ...state, isLoading: false, isError: true, error: action.payload }

    case types.GET_CARDS:
      return { ...state, isLoading: true }

    case types.GET_CARDS_SUCCESS:
      return { ...state, isLoading: false, isError: false, error: '', cards: action.payload }

    case types.GET_CARDS_FAILED:
      return { ...state, isLoading: false, isError: true, error: action.payload }

    case types.DELETE_CARD:
      return { ...state, isLoading: true }

    case types.DELETE_CARD_SUCCESS:
      return { ...state, isLoading: false, isError: false, error: action.payload }

    case types.DELETE_CARD_FAILED:
      return { ...state, isLoading: false, isError: true, error: action.payload }

    case types.UPDATE_CARD:
      return { ...state, isLoading: true }

    case types.UPDATE_CARD_SUCCESS:
      return { ...state, isLoading: false, isError: false, error: action.payload }

    case types.UPDATE_CARD_FAILED:
      return { ...state, isLoading: false, isError: true, error: action.payload }

    default:
      return state;
  }
}

export default boardColumnsReducer;
