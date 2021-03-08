export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILED = 'SIGNIN_FAILED';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const initialState = {
  signedUp: { isRegistred: false, message: '' },
  signedIn: { isLogged: false, message: '' },
  currentUser: { username: '', email: '' }
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGNUP_SUCCESS:
      return { ...state, signedUp: { ...state.signedUp, isRegistred: true, message: action.payload } };
    case SIGNUP_FAILED:
      return { ...state, signedUp: { ...state.signedUp, isRegistred: false, message: action.payload } };
    case SIGNIN_SUCCESS:
      return {...state, signedIn: { ...state.signedIn, isLogged: true, message: action.payload.message }};
    case SIGNIN_FAILED:
      return {...state, signedIn: { ...state.signedIn, isLogged: false, message: action.payload }};
    case SET_CURRENT_USER:
      return { ...state, signedIn: { ...state.signedIn, isLogged: true }, currentUser: { ...state.currentUser, username: action.payload.username, email: action.payload.email } };
    case LOGOUT_USER:
      return { ...state, signedIn: { ...state.signedIn, isLogged: false } };
    default:
      return state;
  }
}

export default authReducer;
