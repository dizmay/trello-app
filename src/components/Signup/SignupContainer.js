import React from 'react';
import Signup from './Signup';
import { fetchUserData } from '../../modules/Signup/SignupActions';

const SignupContainer = () => {
  return (
    <Signup createNewUser={createNewUser} />
  )
}

const mapDispatchToProps = (dispatch) => ({
  createNewUser: (userData) => dispatch(fetchUserData(userData))
});

export default connect(null, mapDispatchToProps)(SignupContainer);
