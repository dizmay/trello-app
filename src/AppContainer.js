import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { checkCurrentUser } from './actions/auth/actions';
import { setAuthToken } from './utils/setAuthToken';

const AppContainer = ({ checkCurrentUser, isLogged }) => {

    useEffect(() => {
        if(localStorage.token) {
            const token = localStorage.token;
            setAuthToken(token);
            checkCurrentUser(token)
        }
      });

    return (
        <App isLogged={isLogged} />
    )
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged,
})

const mapDispatchToProps = (dispatch) => ({
    checkCurrentUser: (token) => dispatch(checkCurrentUser(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
