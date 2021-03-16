import types from '../actions/boards/types';

const initialState = {
  isLoading: false,
  isError: false,
  error: '',
  boards: []
}

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.CREATE_NEW_BOARD:
      return { ...state };

    case types.CREATE_NEW_BOARD_SUCCESS:
      return { ...state, isError: false, error: action.payload.message };

    case types.CREATE_BOARD_FAILED:
      return { ...state, isError: true, error: action.payload.message };

    case types.GET_USER_BOARDS:
      return { ...state, boards: action.payload };

    default:
      return state;
  }
}

export default boardsReducer;
