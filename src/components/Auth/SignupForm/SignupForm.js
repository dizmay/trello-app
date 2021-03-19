import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonElement from '../../ButtonElement/ButtonElement';
import Loader from '../../Loader/Loader';
import NotificationElement from '../../NotificationElement/NotificationElement';
import styles from './SignupForm.module.scss';

const SignupForm = ({ message, isLogged, createNewUser, isLoading }) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState(false);

  const onUsernameChange = (e) => {
    setUsername(e.currentTarget.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };


  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const sendUserData = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    }
    createNewUser(userData);
    setNotification(true);
  }

  return (
    <form id="signup" className={styles.signup__form} onSubmit={sendUserData}>
      {
        isLoading
          ? <Loader />
          : (<>
            <h2 htmlFor="signup" className={styles.signup__title}>Sign up</h2>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" id="username" form="signup" value={username} onChange={onUsernameChange} />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="email" name="email" id="email" form="signup" value={email} onChange={onEmailChange} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" form="signup" value={password} onChange={onPasswordChange} />
            </div>
            <ButtonElement bigFont type="submit" children="Sign up" />
            <Link to="/auth/signin">Already have an account? Sign in!</Link>
            {
              notification && <NotificationElement text={message} handleClick={setNotification} />
            }
          </>)
      }
    </form>
  )
}

export default SignupForm;
