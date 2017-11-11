import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Dashboard from '../../dashboard/Dashboard';
import UsersComponent from '../../users/UsersComponent';

class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Dashboard} />
                <Route path="/users" component={UsersComponent} />
            </div>
        )
    }
}

export default Routes;