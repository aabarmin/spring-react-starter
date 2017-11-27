import React from 'react';
import PropTypes from 'prop-types';

import {AppBar} from "material-ui";
import UserInfo from "./ui/shared/UserInfo";

const Header = (props) => {
    const userInfo = <UserInfo currentUser={props.currentUser}
                               currentUserLoaded={props.currentUserLoaded}
                               onLogout={props.onLogout}  />

    return (
        <AppBar title="Spring React Starter"
                onTitleTouchTap={props.handleTitleClick}
                iconElementRight={userInfo}
                onLeftIconButtonTouchTap={props.handleSidebarOpen}/>
    )
};

Header.propTypes = {
    currentUser: PropTypes.object.isRequired,
    currentUserLoaded: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,

    handleTitleClick: PropTypes.func.isRequired,
    handleSidebarOpen: PropTypes.func.isRequired
};

export default Header;