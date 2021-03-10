import React from 'react';
import { Switch } from 'react-router-dom';
import AuthContainer from './components/Auth/AuthContainer';
import BoardPage from './pages/BoardPage/BoardPage';
import ProtectedRoute from './utils/ProtectedRoute';
import styles from './App.module.scss'

const App = ({ isLogged }) => {
  return (
    <div className={styles.app}>
      <Switch>
          <ProtectedRoute component={AuthContainer} isLogged={!isLogged} path="/auth" redirect="/" />
          <ProtectedRoute component={BoardPage} isLogged={isLogged} path="/" redirect="/auth" />
      </Switch>
    </div>
  );
}

export default App;
