import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Board from './components/Board/Board';
import AuthContainer from './components/Auth/AuthContainer';
import styles from './App.module.scss';

const App = ({ isLogged }) => {
  return (
      <>
        <Switch>
          <Route exact path="/">
            {
              isLogged
                ? (
                  <div className={styles.app}>
                    <HeaderContainer />
                    <Board />
                  </div>
                )
                : <Redirect to="/auth" />
            }
          </Route>
          <Route exact path="/auth">
            {isLogged ? <Redirect to="/" /> : <AuthContainer />}
          </Route>
        </Switch>
      </>
  );
}

export default App;
