import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AuthPage from './pages/AuthPage/AuthPage';
import BoardPage from './pages/BoardPage/BoardPage';
import ProtectedRoute from './utils/ProtectedRoute';
import BoardContainer from './components/Board/BoardContainer';
import styles from './App.module.scss'

const App = ({ isLogged }) => {
  return (
    <div className={styles.app}>
      <Switch>
        <ProtectedRoute component={AuthPage} isLogged={!isLogged} exact path="/auth" redirect="/" />
        <Route exact path="/" component={MainPage} />
        <ProtectedRoute component={BoardPage} isLogged={isLogged} exact path="/boards" redirect="/auth" />
        <ProtectedRoute component={BoardContainer} isLogged={isLogged} path="/boards/:params" redirect="/auth" />
      </Switch>
    </div>
  );
}

export default App;
