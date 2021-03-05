import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import Signup from './components/Signup/Signup';
import styles from './App.module.scss';

function App() {
  return (
      <>
        <Route exact path="/">
          <div className={styles.app}>
            <Header />
            <Board />
          </div>
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </>
  );
}

export default App;
