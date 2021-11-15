import types from '../actions/users/types';

const initialState = {
  notifications: [],
  isLoading: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.GET_USER_NOTIFICATIONS:
      return { ...state, isLoading: true };

    case types.GET_USER_NOTIFICATIONS_SUCCESS:
      return { ...state, notifications: [...action.payload], isLoading: false }

    case types.GET_USER_NOTIFICATIONS_FAILED:
      return { ...state, isLoading: false }

    case types.REPLY_TO_NOTIFICATION:
      return { ...state, isLoading: true };

    case types.REPLY_TO_NOTIFICATION_SUCCESS:
      return { ...state, isLoading: false };

    case types.REPLY_TO_NOTIFICATION_FAILED:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

export default usersReducer;
