import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';

import Header from './app/Header';
import Routes from './app/router/Routes';
import store from './app/store/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Grid>
                        <Header/>
                        <Routes/>
                    </Grid>
                </Router>
            </Provider>
        );
    }
}

export default App;
