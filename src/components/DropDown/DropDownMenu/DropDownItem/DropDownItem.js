import React from 'react';
import styles from './DropDownItem.module.scss';

const DropDownItem = ({ icon, text, handleClick }) => {
    return (
        <div onClick={handleClick} className={styles.dropdown__item}>
            <div className={styles.icon}>{ icon }</div>
            <span>{ text }</span>
        </div>
    )
}

export default DropDownItem;
