import React from 'react';
import DropDownMenuContainer from './DropDownMenu/DropDownMenuContainer';
import styles from './DropDown.module.scss';

const DropDown = () => {
  return (
    <div className={styles.menu}>
      <DropDownMenuContainer />
    </div>
  )
}

export default DropDown;
