import React from 'react';
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
}) => {
  const btnStyle = classNames(
    styles.btn,
    {
      [styles.transparent]: transparent,
      [styles.colorBlack]: colorBlack,
      [styles.colorWhite]: colorWhite,
      [styles.basicFont]: basicFont,
      [styles.bigFont]: bigFont,
    },
  );
  return (
    <button type={type} onClick={handleClick} className={btnStyle}>{children}</button>
  )
}

export default ButtonElement;
