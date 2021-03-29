import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './ButtonElement.module.scss';

const ButtonElement = ({
  children,
  type,
  handleClick,
  transparent,
  colorBlack,
  colorWhite,
  basicFont,
  bigFont,
  redirect,
  redirectPath,
  smallFont,
}) => {
  const btnStyle = classNames(
    styles.btn,
    {
      [styles.transparent]: transparent,
      [styles.colorBlack]: colorBlack,
      [styles.colorWhite]: colorWhite,
      [styles.basicFont]: basicFont,
      [styles.bigFont]: bigFont,
      [styles.smallFont]: smallFont,
    },
  );
  return (
    <button type={type} onClick={handleClick} className={btnStyle}>
      {
        redirect
          ? <Link to={redirectPath}>{children}</Link>
          : <>{children}</>
      }
    </button>
  )
}

export default ButtonElement;
