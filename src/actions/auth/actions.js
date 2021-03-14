import jwt from "jsonwebtoken";
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
import getMessage from '../../utils/getErrorMessage';

export const signupUser = (userData) => async (dispatch) => {
  try {
    const response = await signupAPI.createUser(userData);
    dispatch(signupSuccess());
    const token = response.data.token;
    const decoded = jwt.decode(token);
    localStorage.setItem('token', token);
    setAuthToken(token);
    dispatch(setCurrentUser(decoded))
  } catch (error) {
    const message = getMessage(error);
    dispatch(signupFailed(message));
  }
}

export const signinUser = (userData) => async (dispatch) => {
  try {
    const response = await signinAPI.loginUser(userData);
    const token = response.data.token;
    const decoded = jwt.decode(token);
    localStorage.setItem('token', token);
    setAuthToken(token);
    dispatch(setCurrentUser(decoded))
    dispatch(signinSuccess())
  } catch (error) {
    const message = getMessage(error);
    dispatch(signinFailed(message))
  }
}

export const checkCurrentUser = (token) => (dispatch) => {
  const decoded = jwt.decode(token);
  dispatch(setCurrentUser(decoded))
}

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logout())
}
