import React from 'react';
import PropTypes from 'prop-types';

import {
	Avatar,
    CircularProgress,
    IconMenu,
    MenuItem
} from 'material-ui';

import {
    purple500
} from 'material-ui/styles/colors'

const UserInfo = (props) => {
    const progressor = <CircularProgress color={purple500}
                                         size={48} />;

    if (props.currentUserLoaded === false) {
        return progressor;
    }

    const avatar = <Avatar size={48}>{props.currentUser.login.substring(0, 2)}</Avatar>;

    const menu = (
        <IconMenu iconButtonElement={avatar}>
            <MenuItem primaryText="Logout"
                      onClick={props.onLogout.bind(this)} />
        </IconMenu>
    );

	return menu;
};

UserInfo.propTypes = {
	currentUserLoaded: PropTypes.bool.isRequired,
    currentUser: PropTypes.object.isRequired,

    onLogout: PropTypes.func.isRequired
};

export default UserInfo;