import types from './types.js';

export const signupSuccess = () => ({
  type: types.SIGNUP_SUCCESS,
})

export const signupFailed = (message) => ({
  type: types.SIGNUP_FAILED,
  payload: message,
})

export const signinSuccess = () => ({
  type: types.SIGNIN_SUCCESS,
})

export const signinFailed = (message) => ({
  type: types.SIGNIN_FAILED,
  payload: message,
})

export const setCurrentUser = (decoded) => ({
  type: types.SET_CURRENT_USER,
  payload: decoded
})

export const logout = () => ({
  type: types.LOGOUT_USER
})
