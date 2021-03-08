import React, { useState } from 'react';
import NotificationElement from '../../NotificationElement/NotificationElement';
import styles from './SigninForm.module.scss';

const SigninForm = ({ signedIn, loginUser, setForm }) => {

    const [email, setEmail] = useState('');
    const onEmailChange = (e) => {
        setEmail(e.currentTarget.value);
    };

    const [password, setPassword] = useState('');
    const onPasswordChange = (e) => {
        setPassword(e.currentTarget.value);
    };

    const [notification, setNotification] = useState(false);

    const changeForm = () => {
        setForm(true);
    }

    const sendLoginData = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        loginUser(userData);
        setEmail('');
        setPassword('');
        setNotification(true);
    }

    return (
        <form id="signin" className={styles.signin__form} onSubmit={sendLoginData}>
            <h2 className={styles.signin__title}>Sign in</h2>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" form="signin" value={email} onChange={onEmailChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" form="signin" value={password} onChange={onPasswordChange} />
            </div>
            <button type="submit">Sign in</button>
            <span onClick={changeForm}>Don't have an account? Sign up!</span>
            {
                notification && <NotificationElement text={signedIn.message} type={signedIn.isLogged} setNotification={setNotification} />
            }
        </form>
    )
}

export default SigninForm;
