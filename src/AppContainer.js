import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import App from './App';
import { checkCurrentUser } from './actions/auth/actions';
import { setAuthToken } from './utils/setAuthToken';
import { getIsLogged } from './selectors/authSelectors';

const AppContainer = () => {
  const isLogged = useSelector(getIsLogged)
  const dispatch = useDispatch();
  const checkLoggedUser = (token) => dispatch(checkCurrentUser(token));

  useEffect(() => {
    if (localStorage.token) {
      const token = localStorage.token;
      setAuthToken(token);
      checkLoggedUser(token)
    }
  });

  return (
    <App isLogged={isLogged} />
  )
}

export default AppContainer;
