import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonElement from '../ButtonElement/ButtonElement';
import ProfileElement from './ProfileElement/ProfileElement';
import styles from './Header.module.scss'

const Header = ({ isLogged, username }) => {
  let history = useHistory();
  const mainPage = () => {
    history.push('/');
  }
  return (
    <div className={styles.header}>
      <div className={styles.header__logo} onClick={mainPage}>trello.</div>
      <div className={styles.header__profile}>
        {
          isLogged
            ? <ProfileElement username={username} />
            : (<div className={styles.auth}>
              <ButtonElement children="Sign in" type="button" basicFont colorWhite redirect redirectPath="/auth/signin" />
              <ButtonElement children="Sign up" type="button" basicFont colorWhite redirect redirectPath="/auth/signup" />
            </div>)
        }
      </div>
    </div>
  )
}

export default Header;
