import React from 'react';
import Auth from './Auth';
import { signinUser, signupUser } from '../../actions/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogged, getMessage, selectIsLoading } from '../../selectors/authSelectors';

const AuthContainer = () => {

  const message = useSelector(getMessage);
  const isLogged = useSelector(getIsLogged);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const createNewUser = (userData) => dispatch(signupUser(userData));
  const loginUser = (userData) => dispatch(signinUser(userData));

  return (
    <Auth createNewUser={createNewUser} message={message} isLogged={isLogged} loginUser={loginUser} isLoading={isLoading} />
  )
}

export default AuthContainer;
