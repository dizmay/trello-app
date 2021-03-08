import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const HeaderContainer = ({ isLogged, username }) => {
    return (
        <Header isLogged={isLogged} username={username} />
    )
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.signedIn.isLogged,
    username: state.auth.currentUser.username,
})
  
// const mapDispatchToProps = (dispatch) => ({

// });

export default connect(mapStateToProps, null)(HeaderContainer);
