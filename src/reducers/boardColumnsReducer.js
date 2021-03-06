import types from '../actions/boardColumns/types';

const initialState = {
  isLoading: false,
  isError: false,
  error: '',
  columns: [],
}

const boardColumnsReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.CREATE_NEW_COLUMN:
      return { ...state, isLoading: true }

    case types.CREATE_NEW_COLUMN_SUCCESS:
      return { ...state, isError: false, error: action.payload, isLoading: false }

    case types.CREATE_NEW_COLUMN_FAILED:
      return { ...state, isError: true, error: action.payload, isLoading: false }

    case types.GET_BOARD_COLUMNS:
      return { ...state, isLoading: true }

    case types.GET_BOARD_COLUMNS_SUCCESS:
      return { ...state, columns: [...action.payload], isLoading: false }

    case types.GET_BOARD_COLUMNS_FAILED:
      return { ...state, error: action.payload, isLoading: false }

    case types.DELETE_COLUMN:
      return { ...state, isLoading: true }

    case types.DELETE_COLUMN_SUCCESS:
      return { ...state, isError: false, error: action.payload, isLoading: false }

    case types.DELETE_COLUMN_FAILED:
      return { ...state, isError: true, error: action.payload, isLoading: false }

    case types.UPDATE_COLUMN:
      return { ...state, isLoading: true }

    case types.UPDATE_COLUMN_SUCCESS:
      return { ...state, isError: false, error: action.payload, isLoading: false }

    case types.UPDATE_COLUMN_FAILED:
      return { ...state, isError: true, error: action.payload, isLoading: false }

    case types.CREATE_CARD:
      return { ...state, isLoading: true }

    case types.CREATE_CARD_SUCCESS:
      return { ...state, isLoading: false, isError: false, error: action.payload }

    case types.CREATE_CARD_FAILED:
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
