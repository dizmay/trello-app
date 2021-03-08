import React, { useState } from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import SignupForm from './SignupForm/SignupForm';
import SigninForm from './SigninForm/SigninForm';
import styles from './Auth.module.scss';

const Auth = ({ signedUp, createNewUser, signedIn, loginUser }) => {
    const [form, setForm] = useState(true);
    return (
        <div className={styles.signup}>
            <HeaderContainer />
            {
                form
                    ? <SignupForm signedUp={signedUp} createNewUser={createNewUser} setForm={setForm} />
                    : <SigninForm signedIn={signedIn} loginUser={loginUser} setForm={setForm} />
            }
        </div>
    )
}

export default Auth;
