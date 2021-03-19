import React from 'react';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { MdDashboard } from 'react-icons/md';
import { IoMdNotificationsOutline, IoMdNotifications } from 'react-icons/io';
import DropDownItem from './DropDownItem/DropDownItem';
import styles from './DropDownMenu.module.scss';

const DropDownMenu = ({ logoutUser, notifications, setIsComponentVisible }) => {
  const userHaveNotifications = notifications.length > 0 ? true : false;
  const hideDropDown = () => {
    setIsComponentVisible(false);
  }
  return (
    <div className={styles.dropdown__menu}>
      <DropDownItem icon={<MdDashboard />} text="Boards" redirect redirectPath="/boards" handleClick={hideDropDown} />
      <DropDownItem icon={
        userHaveNotifications
          ? <IoMdNotifications />
          : <IoMdNotificationsOutline />
      } text="Notifications" redirect redirectPath="/notifications" active={userHaveNotifications} handleClick={hideDropDown} />
      <DropDownItem handleClick={logoutUser} icon={<RiLogoutCircleRLine />} text="Logout" />
    </div>
  )
}

export default DropDownMenu;
