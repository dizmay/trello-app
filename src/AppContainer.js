import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkCurrentUser } from './actions/auth/actions';
import { getNotifications } from './actions/users/actions';
import { setAuthToken } from './utils/setAuthToken';
import { selectIsLogged, selectIsLoading } from './selectors/authSelectors';
import { onTabClose } from './utils/onTabClose';
import Loader from './components/Loader/Loader';
import App from './App';

const AppContainer = () => {
  const isLogged = useSelector(selectIsLogged);
  const isLoading = useSelector(selectIsLoading);
  const authenticated = localStorage.authenticated;
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.token;
    setAuthToken(token);
    dispatch(checkCurrentUser(token))
    dispatch(getNotifications())
    window.onbeforeunload = onTabClose;
  }, [dispatch, isLogged]);

  return (<>
    {
      isLoading || !authenticated
        ? <Loader posMiddle />
        : <App isLogged={isLogged} />
    }
  </>)
}

export default AppContainer;
