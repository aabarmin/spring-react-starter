import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import PropTypes from 'prop-types';

class UsersListToolbar extends Component {
    handleCreate() {
        this.props.userCreate();
    }

    render() {
        return (
            <div>
                <Button bsStyle="primary"
                        disabled={this.props.isLoading}
                        onClick={() => this.handleCreate()}>New user</Button>
            </div>
        )
    }
}

UsersListToolbar.propTypes = {
    userCreate: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default UsersListToolbar;