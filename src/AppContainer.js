import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { setCurrentUser } from './redux/auth/authActions';
import { setAuthToken } from './utils/setAuthToken';

const AppContainer = ({ setCurrentUser, isLogged }) => {

    useEffect(() => {
        if(localStorage.token) {
            const token = localStorage.token;
            setAuthToken(token);
            setCurrentUser(token)
        }
      });

    return (
        <App isLogged={isLogged} />
    )
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.signedIn.isLogged
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (token) => dispatch(setCurrentUser(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
