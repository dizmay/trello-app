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
import jwt from "jsonwebtoken";

export const signupUser = (userData) => async (dispatch) => {
  try {
    const response = await signupAPI.createUser(userData);
    dispatch(signupSuccess());
    const token = response.data.token;
    const decoded = jwt.decode(token);
    localStorage.setItem('token', token);
    setAuthToken(token);
    dispatch(setCurrentUser(decoded))
  } catch(error) {
    const message = error.response.data.message;
    dispatch(signupFailed(message))
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
  } catch(error) {
    const message = error.response.data.message;
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
