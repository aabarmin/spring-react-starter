import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Dashboard from '../../dashboard/Dashboard';
import UsersComponent from '../../users/UsersComponent';

import privateRoute from './privateRoute';
import LoginPage from "../login/LoginPage";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Dashboard} />
                <Route path="/users" component={privateRoute(UsersComponent)} />
                <Route path="/login" component={LoginPage} />
            </div>
        )
    }
}

export default Routes;