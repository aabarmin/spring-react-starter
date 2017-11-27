import React from 'react';
import PropTypes from 'prop-types';

import {
	Avatar
} from 'material-ui';

const UserInfo = (props) => {
	return (
			<Avatar size={32}>
				AB
			</Avatar>
			)
};

UserInfo.propTypes = {
		currentUser: PropTypes.object.isRequired
};

export default UserInfo;