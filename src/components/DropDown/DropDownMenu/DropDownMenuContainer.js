import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logoutUser } from '../../../actions/auth/actions';
import DropDownMenu from './DropDownMenu';

const DropDownMenuContainer = () => {

  let history = useHistory();
  const toBoardsPage = () => {
    history.push('/boards');
  }

  const dispatch = useDispatch();
  const logout = () => dispatch(logoutUser());

  return (
    <DropDownMenu logoutUser={logout} toBoardsPage={toBoardsPage} />
  )
}

export default DropDownMenuContainer;
