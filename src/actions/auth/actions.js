import {
  signinFailed,
  signinSuccess,
  signupFailed,
  signupSuccess,
  setCurrentUser,
  logout
} from "./actionCreators";
import { signinAPI, signupAPI } from '../../API';
import { setAuthToken } from '../../utils/setAuthToken';

export const signupUser = (userData) => async (dispatch) => {
  try {
    const response = await signupAPI.createUser(userData);
    dispatch(signupSuccess(response));
    const token = response.data.token;
    localStorage.setItem('token', token);
    setAuthToken(token);
    dispatch(setCurrentUser(token))
    dispatch(signinSuccess(response))
  } catch(error) {
    dispatch(signupFailed(error))
  }
}

export const signinUser = (userData) => async (dispatch) => {
  try {
    const response = await signinAPI.loginUser(userData);
    const token = response.data.token;
    localStorage.setItem('token', token);
    setAuthToken(token);
    dispatch(setCurrentUser(token))
    dispatch(signinSuccess(response))
  } catch(error) {
    dispatch(signinFailed(error))
  }
}

export const checkCurrentUser = (token) => (dispatch) => {
    dispatch(setCurrentUser(token))
}

export const logoutUser = () => (dispatch) => {
  dispatch(logout())
}