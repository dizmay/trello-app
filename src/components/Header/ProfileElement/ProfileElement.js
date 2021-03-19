import React from 'react';
import useComponentVisible from '../../../utils/useComponentVisible';
import DropDown from '../../DropDown/DropDown';
import styles from './ProfileElement.module.scss';

const ProfileElement = ({ username }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const showMenu = () => {
    setIsComponentVisible(!isComponentVisible);
  }

  return (
    <>
      <button type="button" onClick={showMenu} className={styles.profile}>{username[0].toUpperCase()}</button>
      <div ref={ref}>
        {
          (isComponentVisible) && <DropDown setIsComponentVisible={setIsComponentVisible} />
        }
      </div>
    </>
  )
}

export default ProfileElement;
