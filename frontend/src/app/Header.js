import React from 'react';
import PropTypes from 'prop-types';

import {AppBar} from "material-ui";

const Header = (props) => {
    return (
        <AppBar title="Spring React Starter"
                onTitleTouchTap={props.handleTitleClick}
                onLeftIconButtonTouchTap={props.handleSidebarOpen}/>
    )
};

Header.propTypes = {
    handleTitleClick: PropTypes.func.isRequired,
    handleSidebarOpen: PropTypes.func.isRequired
};

export default Header;