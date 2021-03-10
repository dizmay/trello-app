import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLogged, getUsername } from '../../selectors/authSelectors';
import Header from './Header';

const HeaderContainer = () => {

  const isLogged = useSelector(state => getIsLogged(state));
  const username = useSelector(state => getUsername(state));

  return (
    <Header isLogged={isLogged} username={username} />
  )
}

export default HeaderContainer;
