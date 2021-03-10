import React from 'react';
import { useHistory } from 'react-router-dom';
import ButtonElement from '../ButtonElement/ButtonElement';
import SearchElement from '../SearchElement/SearchElement';
import ProfileElement from './ProfileElement/ProfileElement';
import styles from './Header.module.scss'

const Header = ({ isLogged, username }) => {
  let history = useHistory();
  const signUp = (e) => {
    history.push("/auth");
  }
  return (
    <div className={styles.header}>
      <nav className={styles.header__nav}>
        <ul className={styles.navigation}>
          <li>
            <ButtonElement basicSize children="1" />
          </li>
          <li>
            <ButtonElement basicSize children="2" />
          </li>
          <li>
            <ButtonElement basicSize children="3" />
          </li>
          <li>
            <SearchElement />
          </li>
        </ul>
      </nav>
      <div className={styles.header__logo}>LOGO</div>
      <div className={styles.header__profile}>
        <ul className={styles.navigation}>
          <li>
            <ButtonElement basicSize children="4" />
          </li>
          <li>
            <ButtonElement basicSize children="5" />
          </li>
          <li>
            <ButtonElement basicSize children="6" />
          </li>
          <li>
            {
              isLogged
                ? <ProfileElement username={username} />
                : <ButtonElement wideSize handleClick={signUp} children="Sign up" colorBlack />
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
