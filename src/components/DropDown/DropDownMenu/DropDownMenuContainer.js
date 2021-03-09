import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/auth/actions';
import DropDownMenu from './DropDownMenu';

const DropDownMenuContainer = ({ logoutUser }) => {
    return (
        <DropDownMenu logoutUser={logoutUser} />
    )
}

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(DropDownMenuContainer);
