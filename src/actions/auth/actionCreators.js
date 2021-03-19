import types from './types.js';

export const signup = () => ({
  type: types.SIGNUP,
})

export const signupSuccess = () => ({
  type: types.SIGNUP_SUCCESS,
})

export const signupFailed = (message) => ({
  type: types.SIGNUP_FAILED,
  payload: message,
})

export const signin = () => ({
  type: types.SIGNIN,
})

export const signinSuccess = () => ({
  type: types.SIGNIN_SUCCESS,
})

export const signinFailed = (message) => ({
  type: types.SIGNIN_FAILED,
  payload: message,
})

export const setCurrentUser = () => ({
  type: types.SET_CURRENT_USER,
})

export const setCurrentUserSuccess = (decoded) => ({
  type: types.SET_CURRENT_USER_SUCCESS,
  payload: decoded
})

export const setCurrentUserFailed = () => ({
  type: types.SET_CURRENT_USER_FAILED,
})

export const logout = () => ({
  type: types.LOGOUT_USER
})
