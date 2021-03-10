import React from 'react';
import Auth from './Auth';
import { signinUser, signupUser } from '../../actions/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogged, getMessage } from '../../selectors/authSelectors';

const AuthContainer = () => {

  const message = useSelector(state => getMessage(state))
  const isLogged = useSelector(state => getIsLogged(state));

  const dispatch = useDispatch();
  const createNewUser = (userData) => dispatch(signupUser(userData));
  const loginUser = (userData) => dispatch(signinUser(userData));

  return (
    <Auth createNewUser={createNewUser} message={message} isLogged={isLogged} loginUser={loginUser} />
  )
}

export default AuthContainer;
