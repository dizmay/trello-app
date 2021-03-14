import React from 'react';
import { useHistory } from 'react-router';
import ButtonElement from '../ButtonElement/ButtonElement';
import teamwork from '../../assets/svg/teamwork.svg';
import styles from './HeroSection.module.scss';

const HeroSection = ({ isLogged }) => {
  let history = useHistory();
  const signup = () => {
    history.push('/auth');
  }
  const boards = () => {
    history.push('/boards');
  }
  return (
    <div className={styles.section}>
      <div className={styles.section__container}>
        <div className={styles.container__content}>
          <h1>Trello helps teams move work forward.</h1>
          <p>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique — accomplish it all with Trello.</p>
          {
            isLogged
              ? <ButtonElement type="button" handleClick={boards} children="Try now" bigFont />
              : <ButtonElement handleClick={signup} type="button" children="Sign up" bigFont />
          }
        </div>
        <img src={teamwork} alt="Teamwork" />
      </div>
    </div>
  )
}

export default HeroSection;
