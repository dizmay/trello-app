import types from '../actions/auth/types';

const initialState = {
  isLogged: false,
  message: '',
  id: null,
  username: '',
  email: '',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SIGNUP_SUCCESS:
      return { ...state, };

    case types.SIGNUP_FAILED:
      return { ...state, message: action.payload };

    case types.SIGNIN_SUCCESS:
      return { ...state, isLogged: true };

    case types.SIGNIN_FAILED:
      return { ...state, isLogged: false, message: action.payload };

    case types.SET_CURRENT_USER:
      return { ...state, isLogged: true, id: action.payload.id , username: action.payload.username, email: action.payload.email };

    case types.LOGOUT_USER:
      return { ...state, isLogged: false, username: '', email: '' };

    default:
      return state;
  }
}

export default authReducer;
