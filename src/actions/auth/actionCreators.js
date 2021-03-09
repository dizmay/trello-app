import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
  SET_CURRENT_USER,
  LOGOUT_USER,
} from './types.js';
import jwt from 'jsonwebtoken';

export const signupSuccess = (response) => ({
  type: SIGNUP_SUCCESS,
  payload: response.data.message,
})

export const signupFailed = (error) => ({
  type: SIGNUP_FAILED,
  payload: error.response.data.message,
})

export const signinSuccess = (response) => ({
  type: SIGNIN_SUCCESS,
  payload: response.data,
})

export const signinFailed = (error) => ({
  type: SIGNIN_FAILED,
  payload: error.response.data.message,
})

export const setCurrentUser = (token) => ({
  type: SET_CURRENT_USER,
  payload: jwt.decode(token)
})

export const logout = () => ({
  type: LOGOUT_USER
})
