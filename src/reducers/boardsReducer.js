import types from '../actions/boards/types';

const initialState = {
  isCreated: false,
  message: '',
  userBoards: [],
}

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.CREATE_NEW_BOARD:
      return { ...state, isCreated: true, message: action.payload.message };

    case types.CREATE_BOARD_FAILED:
      return { ...state, isCreated: false, message: action.payload.message };

    case types.GET_USER_BOARDS:
      return { ...state, userBoards: [...action.payload] }

    default:
      return state;
  }
}

export default boardsReducer;
