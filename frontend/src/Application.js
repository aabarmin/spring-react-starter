import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from './app/Header';
import Routes from './app/router/Routes';
import Sidebar from "./app/Sidebar";
import {sidebarClose, sidebarOpen} from "./app/store/reducers/app/layout";
import NotificationBar from "./app/NotificationBar";
import {withRouter} from "react-router-dom";
import LoginDialog from "./app/ui/login/LoginDialog";
import {authenticate} from "./app/store/reducers/app/auth";

class Application extends Component {
    state = {
        login: "",
        password: ""
    };

    handleHeaderTitleClick() {
        this.props.history.push('/');
    }

    handleSidebarOpen() {
        this.props.sidebarOpen();
    }

    handleSidebarClose() {
        this.props.sidebarClose();
    }

    handleLoginChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleLogin() {
        this.props.login(this.state.login, this.state.password);
    }

    render() {
        return (
            <content>
                <Header handleSidebarOpen={this.handleSidebarOpen.bind(this)}
                        handleTitleClick={this.handleHeaderTitleClick.bind(this)}/>

                <Sidebar open={this.props.sidebarOpened}
                         handleClose={this.handleSidebarClose.bind(this)}/>

                <Routes/>

                <NotificationBar open={this.props.notificationBarOpened}
                                 message={this.props.notificationBarMessage} />

                <LoginDialog open={this.props.loginOpened}
                             inProgress={this.props.loginProgress}
                             error={this.props.loginError}
                             handleChange={this.handleLoginChange.bind(this)}
                             handleLogin={this.handleLogin.bind(this)}/>
            </content>
        )
    }
}

Application.propTypes = {
    history: PropTypes.object.isRequired,

    notificationBarOpened: PropTypes.bool.isRequired,
    notificationBarMessage: PropTypes.string.isRequired,

    loginOpened: PropTypes.bool.isRequired,
    loginProgress: PropTypes.bool.isRequired,
    loginError: PropTypes.string.isRequired,
    login: PropTypes.func.isRequired,

    sidebarOpen: PropTypes.func.isRequired,
    sidebarClose: PropTypes.func.isRequired,
    sidebarOpened: PropTypes.bool.isRequired
};

const mapState = (state) => ({
    sidebarOpened: state.app.layout.sidebarOpen,

    notificationBarOpened: state.app.notifications.showNotification,
    notificationBarMessage: state.app.notifications.notification,

    loginOpened: state.app.auth.isDialogVisible,
    loginProgress: state.app.auth.inProgress,
    loginError: state.app.auth.loginException
});

const mapActions = (dispatch) => ({
    sidebarOpen: () => dispatch(sidebarOpen()),
    sidebarClose: () => dispatch(sidebarClose()),

    login: (login, password) => dispatch(authenticate(login, password))
});

export default withRouter(connect(mapState, mapActions)(Application));