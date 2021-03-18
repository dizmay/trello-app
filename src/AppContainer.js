import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkCurrentUser } from './actions/auth/actions';
import { getNotifications } from './actions/users/actions';
import { setAuthToken } from './utils/setAuthToken';
import { getIsLogged } from './selectors/authSelectors';
import App from './App';

const AppContainer = () => {
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();
  const checkLoggedUser = (token) => dispatch(checkCurrentUser(token));
  const getUserNotifications = () => dispatch(getNotifications())

  useEffect(() => {
    if (localStorage.token) {
      const token = localStorage.token;
      setAuthToken(token);
      checkLoggedUser(token);
      getUserNotifications();
    }
  });

  return (
    <App isLogged={isLogged} />
  )
}

export default AppContainer;
