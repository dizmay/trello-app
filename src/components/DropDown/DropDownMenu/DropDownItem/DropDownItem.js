import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './DropDownItem.module.scss';

const DropDownItem = ({
  icon,
  text,
  redirect,
  redirectPath,
  handleClick,
  active
}) => {
  
  const iconClassnames = classNames(
    styles.icon,
    {
      [styles.icon_active]: active
    }
  )
  return (
    <div className={styles.dropdown__item} onClick={handleClick}>
      {
        redirect
          ? (
            <Link to={redirectPath}>
              <div>
                <div className={iconClassnames}>{icon}</div>
                <span>{text}</span>
              </div>
            </Link>
          )
          : (
            <div>
              <div className={iconClassnames}>{icon}</div>
              <span>{text}</span>
            </div>
          )
      }

    </div>
  )
}

export default DropDownItem;
