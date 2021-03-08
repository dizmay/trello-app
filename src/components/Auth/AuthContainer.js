import React from 'react';
import Auth from './Auth';
import { signinUser, signupUser } from '../../redux/auth/authActions';
import { connect } from 'react-redux';

const AuthContainer = ({ signedUp, createNewUser, signedIn, loginUser }) => {
  return (
    <Auth createNewUser={createNewUser} signedUp={signedUp} signedIn={signedIn} loginUser={loginUser} />
  )
}

const mapStateToProps = (state) => ({
  signedUp: state.auth.signedUp,
  signedIn: state.auth.signedIn,
})

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (userData) => dispatch(signupUser(userData)),
  loginUser: (userData) => dispatch(signinUser(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
