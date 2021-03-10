import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import App from './App';
import { checkCurrentUser } from './actions/auth/actions';
import { setAuthToken } from './utils/setAuthToken';
import { getIsLogged } from './selectors/authSelectors';

const AppContainer = () => {
    const isLogged = useSelector(state => getIsLogged(state))
    const dispatch = useDispatch();

    useEffect(() => {
        if(localStorage.token) {
            const token = localStorage.token;
            setAuthToken(token);
            dispatch(checkCurrentUser(token))
        }
      });

    return (
        <App isLogged={isLogged} />
    )
}

export default AppContainer;
