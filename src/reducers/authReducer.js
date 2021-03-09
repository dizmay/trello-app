import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
  SET_CURRENT_USER,
  LOGOUT_USER,
} from '../actions/auth/types';

const initialState = {
  isLogged: false,
  message: '',
  username: '',
  email: '',
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {

    case SIGNUP_SUCCESS:
      return { ...state, };

    case SIGNUP_FAILED:
      return { ...state, message: action.payload };

    case SIGNIN_SUCCESS:
      return { ...state, isLogged: true };

    case SIGNIN_FAILED:
      return { ...state, isLogged: false, message: action.payload };

    case SET_CURRENT_USER:
      return { ...state, isLogged: true, username: action.payload.username, email: action.payload.email };

    case LOGOUT_USER:
      return { ...state, isLogged: false, username: '', email: '' };

    default:
      return state;
  }
}

export default authReducer;
