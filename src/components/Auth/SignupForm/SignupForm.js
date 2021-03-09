import React, { useState } from 'react';
import NotificationElement from '../../NotificationElement/NotificationElement';
import styles from './SignupForm.module.scss';

const SignupForm = ({ message, isLogged, createNewUser, setForm }) => {

    const [username, setUsername] = useState('');
    const onUsernameChange = (e) => {
        setUsername(e.currentTarget.value);
    };

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
        setForm(false);
    }

    const sendUserData = (e) => {
        e.preventDefault();
        const userData = {
            username,
            email,
            password,
        }
        createNewUser(userData);
        setUsername('');
        setEmail('');
        setPassword('');
        setNotification(true);
    }

    return (
        <form id="signup" className={styles.signup__form} onSubmit={sendUserData}>
            <h2 htmlFor="signup" className={styles.signup__title}>Sign up</h2>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" form="signup" value={username} onChange={onUsernameChange} />
            </div>
            <div>
                <label htmlFor="email">E-mail:</label>
                <input type="email" name="email" id="email" form="signup" value={email} onChange={onEmailChange} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" form="signup" value={password} onChange={onPasswordChange} />
            </div>
            <button type="submit">Sign up</button>
            <span onClick={changeForm}>Already have an account? Sign in!</span>
            {
                notification && <NotificationElement text={message} setNotification={setNotification} />
            }
        </form>
    )
}

export default SignupForm;
