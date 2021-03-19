import types from '../actions/boards/types';

const initialState = {
  isLoading: false,
  isError: false,
  error: '',
  boards: [],
  boardUsers: [],
}

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.CREATE_NEW_BOARD:
      return { ...state, isLoading: true };

    case types.CREATE_NEW_BOARD_SUCCESS:
      return { ...state, isError: false, error: '', isLoading: false, };

    case types.CREATE_BOARD_FAILED:
      return { ...state, isError: true, error: action.payload, isLoading: false };

    case types.GET_USER_BOARDS:
      return { ...state, isLoading: true };

    case types.GET_USER_BOARDS_SUCCESS:
      return { ...state, boards: action.payload, isLoading: false };

    case types.GET_USER_BOARDS_FAILED:
      return { ...state, isLoading: false };

    case types.DELETE_BOARD:
      return { ...state, isLoading: true };

    case types.DELETE_BOARD_SUCCESS:
      return { ...state, isLoading: false };

    case types.DELETE_BOARD_FAILED:
      return { ...state, isLoading: false };

    case types.INVITE_USER_ON_BOARD:
      return { ...state, isLoading: true };

    case types.INVITE_USER_ON_BOARD_SUCCESS:
      return { ...state, isError: false, error: '', isLoading: false };

    case types.INVITE_USER_ON_BOARD_FAILED:
      return { ...state, isError: true, error: action.payload, isLoading: false };

    case types.GET_BOARD_USERS:
      return { ...state, boardUsers: action.payload };

    default:
      return state;
  }
}

export default boardsReducer;
