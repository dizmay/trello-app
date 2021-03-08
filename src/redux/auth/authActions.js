import { signupAPI, signinAPI } from '../../API/api';
import { SIGNUP_SUCCESS, SIGNUP_FAILED, SIGNIN_SUCCESS, SIGNIN_FAILED, SET_CURRENT_USER, LOGOUT_USER } from './authReducer';
import { setAuthToken } from '../../utils/setAuthToken';
import jwt from 'jsonwebtoken';

export const signupUser = (userData) => async (dispatch) => {
  try {
    const response = await signupAPI.createUser(userData);
    dispatch({ type: SIGNUP_SUCCESS, payload: response.data.message });
  } catch(error) {
    dispatch({ type: SIGNUP_FAILED, payload: error.response.data.message })
  }
}

export const signinUser = (userData) => async (dispatch) => {
  try {
    const response = await signinAPI.loginUser(userData);
    const token = response.data.token;
    localStorage.setItem('token', token);
    setAuthToken(token);
    dispatch({ type: SET_CURRENT_USER, payload: jwt.decode(token) })
    dispatch({ type: SIGNIN_SUCCESS, payload: response.data })
  } catch(error) {
    dispatch({ type: SIGNIN_FAILED, payload: error.response.data.message })
  }
}

export const setCurrentUser = (token) => (dispatch) => {
    dispatch({ type: SET_CURRENT_USER, payload: jwt.decode(token) })
}

export const logoutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER })
}
