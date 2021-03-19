import React from 'react';
import DropDownMenuContainer from './DropDownMenu/DropDownMenuContainer';
import styles from './DropDown.module.scss';

const DropDown = ({ setIsComponentVisible }) => {
  return (
    <div className={styles.menu}>
      <DropDownMenuContainer setIsComponentVisible={setIsComponentVisible} />
    </div>
  )
}

export default DropDown;
