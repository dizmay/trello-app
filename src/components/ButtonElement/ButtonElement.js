import React from 'react';
import classNames from 'classnames';
import styles from './ButtonElement.module.scss';

const ButtonElement = ({
  children,
  handleClick,
  basicSize,
  doubleSize,
  wideSize,
  transparent,
  colorBlack,
  colorWhite,
}) => {
  const btnStyle = classNames(
    styles.btn,
    {
      [styles.basicSize]: basicSize,
      [styles.doubleSize]: doubleSize,
      [styles.transparent]: transparent,
      [styles.colorBlack]: colorBlack,
      [styles.colorWhite]: colorWhite,
      [styles.wideSize]: wideSize,
    },
  );
  return (
    <button type="button" onClick={handleClick} className={btnStyle}>{children}</button>
  )
}

export default ButtonElement;
