import React from 'react';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import DropDownItem from './DropDownItem/DropDownItem';
import styles from './DropDownMenu.module.scss';

const DropDownMenu = ({ logoutUser }) => {
  const logout = () => {
    logoutUser();
  }
  return (
    <div className={styles.dropdown__menu}>
      <DropDownItem handleClick={logout} icon={<RiLogoutCircleRLine />} text="Logout" />
    </div>
  )
}

export default DropDownMenu;
