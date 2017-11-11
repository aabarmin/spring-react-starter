import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

class UsersListToolbar extends Component {
    render() {
        return (
            <div>
                <Link to="/users/new/" className="btn btn-primary">
                    New User
                </Link>
            </div>
        )
    }
}

export default UsersListToolbar;