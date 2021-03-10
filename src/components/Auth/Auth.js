import React, { useState } from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import SignupForm from './SignupForm/SignupForm';
import SigninForm from './SigninForm/SigninForm';
import styles from './Auth.module.scss';

const Auth = ({ message, createNewUser, isLogged, loginUser }) => {
  const [form, setForm] = useState(true);
  return (
    <div className={styles.signup}>
      <HeaderContainer />
      {
        form
          ? <SignupForm message={message} isLogged={isLogged} createNewUser={createNewUser} setForm={setForm} />
          : <SigninForm isLogged={isLogged} message={message} loginUser={loginUser} setForm={setForm} />
      }
    </div>
  )
}

export default Auth;
