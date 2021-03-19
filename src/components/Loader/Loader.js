import React from 'react';
import classNames from 'classnames';
import loader from '../../assets/loader/loader.svg';
import styles from './Loader.module.scss';

const Loader = ({ bigSize, posMiddle }) => {
  const loaderStyles = classNames({
    [styles.big]: bigSize,
    [styles.middle]: posMiddle
  })
  return (
    <img src={loader} alt="Loader" className={loaderStyles} />
  )
}

export default Loader;
