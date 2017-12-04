import React from 'react';
import {
	Avatar,
	Card, 
	CardTitle,
	CardText,
	LinearProgress,
	List,
	ListItem
} from 'material-ui';
import {
	FileFolder
} from 'material-ui/svg-icons';
import PropTypes from 'prop-types';

const UsersCard = (props) => {
	const Progress = props.isLoading ?
			<LinearProgress mode="indeterminate" /> : null;
	
	return (
			<Card>
				<CardTitle title="System users" />
				<CardText>
					<List>
						<ListItem primaryText={"Users total: " + props.usersTotal} 
									secondaryText={"Drafts: " + props.usersDrafts}
									leftAvatar={<Avatar icon={<FileFolder />} />}
									onClick={props.onUsersClick} />
					</List>
					{Progress}
				</CardText>
			</Card>
			);
};

UsersCard.propTypes = {
		usersTotal: PropTypes.number.isRequired,
		usersDrafts: PropTypes.number.isRequired,
		isLoading: PropTypes.bool.isRequired,
		onUsersClick: PropTypes.func.isRequired
};

export default UsersCard;