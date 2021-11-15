import React from 'react';
import styles from './ModalButtons.module.scss';

const ModalButtons = ({ icon, text, handleClick }) => {
  return (
    <button onClick={handleClick} className={styles.btn}>
      <div className={styles.btn__container}>
        <div>{icon}</div>
        <p>{text}</p>
      </div>
    </button>
  )
}

export default ModalButtons;
