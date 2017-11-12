import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserViewRow extends Component {
    handleRowClick(id) {
        this.props.userSwitchToEdit(id);
    }

    render() {
        return (
            <tr>
                <td onClick={() => this.handleRowClick(this.props.user.id)}>{this.props.user.id}</td>
                <td onClick={() => this.handleRowClick(this.props.user.id)}>{this.props.user.login}</td>
            </tr>
        )
    }
}

UserViewRow.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        login: PropTypes.string.isRequired
    }).isRequired,
    userSwitchToEdit: PropTypes.func.isRequired
};

export default UserViewRow;