import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Dashboard from '../ui/dashboard/Dashboard';

import UsersPage from "../ui/users/UsersPage";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Dashboard} />
                <Route path="/users/" component={UsersPage} />
            </div>
        )
    }
}

export default Routes;