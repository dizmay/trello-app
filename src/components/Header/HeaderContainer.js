import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLogged, selectUsername } from '../../selectors/authSelectors';
import Header from './Header';

const HeaderContainer = () => {

  const isLogged = useSelector(selectIsLogged);
  const username = useSelector(selectUsername);

  return (
    <Header isLogged={isLogged} username={username} />
  )
}

export default HeaderContainer;
