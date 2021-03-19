import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import BoardPage from './pages/BoardPage/BoardPage';
import ProtectedRoute from './utils/ProtectedRoute';
import BoardContainer from './components/Board/BoardContainer';
import NotificationsContainer from './components/Notifications/NotificationsContainer';
import styles from './App.module.scss'

const App = ({ isLogged }) => {
  console.log(isLogged);
  return (
    <div className={styles.app}>
      <Switch>
        <ProtectedRoute component={AuthPage} isLogged={!isLogged} exact path="/auth/:params" redirect="/" />
        <Route exact path="/" component={MainPage} />
        <ProtectedRoute component={BoardPage} isLogged={isLogged} exact path="/boards" redirect="/auth/signup" />
        <ProtectedRoute component={BoardContainer} isLogged={isLogged} path="/boards/:params" redirect="/auth/signup" />
        <ProtectedRoute component={NotificationsContainer} isLogged={isLogged} path="/notifications" redirect="/auth/signup" />
      </Switch>
    </div>
  );
}

export default App;
