import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Grid from 'react-bootstrap/lib/Grid';

import Header from './app/Header';

import Dashboard from './dashboard/Dashboard';
import UsersComponent from './users/UsersComponent';

class App extends Component {
    render() {
        return (
            <Router>
                <Grid>
                    <Header/>

                    <Route exact path="/" component={Dashboard} />
                    <Route path="/users" component={UsersComponent} />
                </Grid>
            </Router>
        );
    }
}

export default App;
