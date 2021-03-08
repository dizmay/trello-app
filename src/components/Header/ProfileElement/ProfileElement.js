import React, { useState } from 'react';
import DropDown from '../../DropDown/DropDown';
import styles from './ProfileElement.module.scss';

const ProfileElement = ({ username }) => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <button onClick={() => { setMenu(!menu) }} className={styles.profile}>{username[0].toUpperCase()}</button>
            {
                menu && <DropDown />
            }
        </>
    )
}

export default ProfileElement;
