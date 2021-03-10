import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../actions/auth/actions';
import DropDownMenu from './DropDownMenu';

const DropDownMenuContainer = () => {

  const dispatch = useDispatch();
  const logout = () => dispatch(logoutUser());

  return (
    <DropDownMenu logoutUser={logout} />
  )
}

export default DropDownMenuContainer;
