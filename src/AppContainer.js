import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkCurrentUser } from './actions/auth/actions';
import { getNotifications } from './actions/users/actions';
import { setAuthToken } from './utils/setAuthToken';
import { selectIsLogged, selectIsLoading } from './selectors/authSelectors';
import Loader from './components/Loader/Loader';
import App from './App';

const AppContainer = () => {
  const isLogged = useSelector(selectIsLogged);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.token) {
      const token = localStorage.token;
      setAuthToken(token);
      dispatch(checkCurrentUser(token))
      dispatch(getNotifications())
    }
  }, [dispatch]);

  return (<>
    {
      isLoading
        ? <Loader posMiddle />
        : <App isLogged={isLogged} />
    }
  </>)
}

export default AppContainer;
