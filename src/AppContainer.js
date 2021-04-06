import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkCurrentUser } from './actions/auth/actions';
import { getNotifications } from './actions/users/actions';
import { setAuthToken } from './utils/setAuthToken';
import { selectIsLogged } from './selectors/authSelectors';
import Loader from './components/Loader/Loader';
import App from './App';

const AppContainer = () => {
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.token;
    setAuthToken(token);
    dispatch(checkCurrentUser(token))
    dispatch(getNotifications())
  }, [dispatch, isLogged]);

  return (<>
    {
      isLogged === null
        ? <Loader posMiddle />
        : <App isLogged={isLogged} />
    }
  </>)
}

export default AppContainer;
