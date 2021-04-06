import jwt from "jsonwebtoken";
import {
  signinFailed,
  signinSuccess,
  signupFailed,
  signupSuccess,
  setCurrentUser,
  logout,
  signup,
  signin,
  setCurrentUserSuccess,
  setCurrentUserFailed
} from "./actionCreators";
import { authAPI } from '../../API';
import { setAuthToken } from '../../utils/setAuthToken';
import getMessage from '../../utils/getErrorMessage';

export const signupUser = (userData) => async (dispatch) => {
  try {
    dispatch(signup());
    const response = await authAPI.createUser(userData);
    const token = response.data.token;
    const decoded = jwt.decode(token);
    localStorage.setItem('token', token);
    setAuthToken(token);
    dispatch(setCurrentUserSuccess(decoded))
    dispatch(signupSuccess());
  } catch (error) {
    const message = getMessage(error);
    dispatch(signupFailed(message));
  }
}

export const signinUser = (userData) => async (dispatch) => {
  try {
    dispatch(signin());
    const response = await authAPI.loginUser(userData);
    const token = response.data.token;
    const decoded = jwt.decode(token);
    localStorage.setItem('token', token);
    setAuthToken(token);
    dispatch(setCurrentUserSuccess(decoded))
    dispatch(signinSuccess())
  } catch (error) {
    const message = getMessage(error);
    dispatch(signinFailed(message))
  }
}

export const checkCurrentUser = (token) => (dispatch) => {
  try {
    dispatch(setCurrentUser());
    const decoded = jwt.decode(token);
    dispatch(setCurrentUserSuccess(decoded));
  }
  catch (error) {
    dispatch(setCurrentUserFailed())
  }
}

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(logout())
}
