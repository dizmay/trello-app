import React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import Board from './components/Board/Board';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Board />
    </div>
  );
}

export default App;
