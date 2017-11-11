import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';

import Header from './app/Header';
import Routes from './app/router/Routes';
import store from './app/store/store';

import LoginComponent from "./app/ui/login/LoginComponent";

import { authenticate } from "./app/store/reducers/app/auth";

const p = (store) => ({
    visible: store.authentication.isDialogVisible,
    inProgress: store.authentication.inProgress,
    target: store.authentication.basicAuthenticationUrl
});

const a = (dispatch) => ({
    login: (username, password, target) => {
        dispatch(authenticate(username, password, target));
    }
});

const LoginDialog = connect(p, a)(LoginComponent);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Grid>
                        <Header/>
                        <Routes/>
                        <LoginDialog />
                    </Grid>
                </Router>
            </Provider>
        );
    }
}

export default App;
