import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../actions/auth/actions';
import { selectNotifications } from '../../../selectors/users';
import DropDownMenu from './DropDownMenu';

const DropDownMenuContainer = ({ setIsComponentVisible }) => {

  const notifications = useSelector(selectNotifications)
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutUser());

  return (
    <DropDownMenu logoutUser={logout} notifications={notifications} setIsComponentVisible={setIsComponentVisible} />
  )
}

export default DropDownMenuContainer;
