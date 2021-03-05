import React, { useState } from 'react';
import Header from '../Header/Header';
import styles from './Signup.module.scss';

const Signup = ({ createNewUser }) => {

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

    const sendUserData = (e) => {
        e.preventDefault();
        const userData = {
            username,
            email,
            password,
        }
        createNewUser(userData);
    }
    return (
        <div className={styles.signup}>
            <Header />
            <form id="signup" className={styles.signup__form} onSubmit={sendUserData}>
                <h2 htmlFor="signup" className={styles.signup__title}>Sign up</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" form="signup" onChange={onUsernameChange} />
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" id="email" form="signup" onChange={onEmailChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" form="signup" onChange={onPasswordChange} />
                </div>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default Signup;
