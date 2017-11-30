import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	Paper
} from 'material-ui';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import UsersCard from '../users/UsersCard';
import {userStatisticsLoad} from '../../store/reducers/users/users';

class Dashboard extends Component {
	componentDidMount = () => {
		this.props.usersStatisticsLoad();
	}
	
	handleUsersListClick = () => {
		this.props.history.push('/users');
	}
	
	render = () => {
		const Users = <UsersCard isLoading={this.props.usersIsLoading}
									usersTotal={this.props.usersTotal}
									usersDrafts={this.props.usersDrafts} 
									onUsersClick={this.handleUsersListClick.bind(this)} />
		
		const cardStyle = {
				width: '30%',
				display: 'inline-block',
				margin: '5px'
		};
		
		return [
			<Paper style={cardStyle} key="users">
				{Users}
			</Paper>
			];
	}
};

Dashboard.propTypes = {
		history: PropTypes.object.isRequired,
		
		usersIsLoading: PropTypes.bool.isRequired,
		usersTotal: PropTypes.number.isRequired,
		usersDrafts: PropTypes.number.isRequired,
		usersStatisticsLoad: PropTypes.func.isRequired
};

const mapState = (state) => ({
	usersIsLoading: state.users.isLoading,
	usersTotal: state.users.usersTotal,
	usersDrafts: state.users.usersDrafts,
});

const mapActions = (dispatch) => ({
	usersStatisticsLoad: () => { dispatch(userStatisticsLoad()) }
});

export default withRouter(connect(mapState, mapActions)(Dashboard));