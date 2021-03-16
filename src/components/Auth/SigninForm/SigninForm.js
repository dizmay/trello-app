import React, { useState } from 'react';
import ButtonElement from '../../ButtonElement/ButtonElement';
import NotificationElement from '../../NotificationElement/NotificationElement';
import styles from './SigninForm.module.scss';

const SigninForm = ({ isLogged, message, loginUser, setForm }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState(false);

  const onEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };


  const changeForm = () => {
    setForm(true);
  }

  const sendLoginData = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    loginUser(userData);
    setEmail('');
    setPassword('');
    setNotification(true);
  }

  return (
    <form id="signin" className={styles.signin__form} onSubmit={sendLoginData}>
      <h2 className={styles.signin__title}>Sign in</h2>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" form="signin" value={email} onChange={onEmailChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" form="signin" value={password} onChange={onPasswordChange} />
      </div>
      <ButtonElement type="submit" children="Sign in" bigFont colorWhite />
      <span onClick={changeForm}>Don't have an account? Sign up!</span>
      {
        notification && !isLogged && <NotificationElement text={message} setNotification={setNotification} />
      }
    </form>
  )
}

export default SigninForm;
