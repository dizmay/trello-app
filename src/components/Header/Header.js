import React from 'react';
import ButtonElement from '../ButtonElement/ButtonElement';
import SearchElement from '../SearchElement/SearchElement';
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <nav className={styles.header__nav}>
                <ul className={styles.navigation}>
                    <li>
                        <ButtonElement basicSize children="1" />
                    </li>
                    <li>
                        <ButtonElement basicSize children="2" />
                    </li>
                    <li>
                        <ButtonElement basicSize children="3" />
                    </li>
                    <li>
                        <SearchElement />
                    </li>
                </ul>
            </nav>
            <div className={styles.header__logo}>LOGO</div>
            <div className={styles.header__profile}>
                <ul className={styles.navigation}>
                    <li>
                        <ButtonElement basicSize children="4" />
                    </li>
                    <li>
                        <ButtonElement basicSize children="5" />
                    </li>
                    <li>
                        <ButtonElement basicSize children="6" />
                    </li>
                    <li>
                        <div className={styles.navigation__profile}>PS</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
