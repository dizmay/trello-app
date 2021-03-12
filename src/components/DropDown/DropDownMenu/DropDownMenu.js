import React from 'react';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { MdDashboard } from 'react-icons/md';
import DropDownItem from './DropDownItem/DropDownItem';
import styles from './DropDownMenu.module.scss';

const DropDownMenu = ({ logoutUser, toBoardsPage }) => {
  return (
    <div className={styles.dropdown__menu}>
      <DropDownItem handleClick={() => { toBoardsPage() }} icon={<MdDashboard />} text="Boards" />
      <DropDownItem handleClick={() => { logoutUser() }} icon={<RiLogoutCircleRLine />} text="Logout" />
    </div>
  )
}

export default DropDownMenu;
