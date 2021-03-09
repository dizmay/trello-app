import React from 'react';
import Auth from './Auth';
import { signinUser, signupUser } from '../../actions/auth/actions';
import { connect } from 'react-redux';

const AuthContainer = ({ message, isRegistered, createNewUser, isLogged, loginUser }) => {
  return (
    <Auth createNewUser={createNewUser} message={message} isRegistered={isRegistered} isLogged={isLogged} loginUser={loginUser} />
  )
}

const mapStateToProps = (state) => ({
  message: state.auth.message,
  isLogged: state.auth.isLogged,
})

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (userData) => dispatch(signupUser(userData)),
  loginUser: (userData) => dispatch(signinUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
