import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const HeaderContainer = ({ isLogged, username }) => {
    return (
        <Header isLogged={isLogged} username={username} />
    )
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged,
    username: state.auth.username,
})

export default connect(mapStateToProps, null)(HeaderContainer);
