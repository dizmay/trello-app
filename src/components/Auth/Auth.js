import React from 'react';
import { useRouteMatch } from 'react-router';
import SignupForm from './SignupForm/SignupForm';
import SigninForm from './SigninForm/SigninForm';
import styles from './Auth.module.scss';

const Auth = ({ message, createNewUser, isLogged, loginUser, isLoading }) => {
  const match = useRouteMatch();
  const form = match.params.params;
  return (
    <div className={styles.signup}>
      {
        form === 'signup'
          ? <SignupForm message={message} isLogged={isLogged} createNewUser={createNewUser} isLoading={isLoading} />
          : <SigninForm isLogged={isLogged} message={message} loginUser={loginUser} isLoading={isLoading} />
      }
    </div>
  )
}

export default Auth;
