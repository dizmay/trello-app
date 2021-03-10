import React from 'react';
import styles from './SearchElement.module.scss';

const SearchElement = () => {
  return (
    <form id="search" action="#" className={styles.searchForm}>
      <input type="search" form="search" placeholder="Jump to..." className={styles.searchForm__input} />
      <button type="submit" className={styles.searchForm__btn}>⌕</button>
    </form>
  )
}

export default SearchElement;
