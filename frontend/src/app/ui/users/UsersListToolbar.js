import React, { Component } from 'react';
import {Button} from "react-bootstrap";

class UsersListToolbar extends Component {
    render() {
        return (
            <div>
                <Button bsStyle="primary">New user</Button>
            </div>
        )
    }
}

export default UsersListToolbar;