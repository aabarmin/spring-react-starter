import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import {Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {sectionSelect} from "../../store/reducers/users/users";
import UsersList from "./UsersList";
import {Route} from "react-router-dom";
import UserForm from "./UserForm";

const sidebarProps = state => ({
    activeSection: state.users.activeSection
});

const sidebarActions = dispatch => ({
    selectSection: (id) => {
        dispatch(sectionSelect(id))
    }
});

const WrappedSidebar = connect(sidebarProps, sidebarActions)(Sidebar);

class UsersPage extends Component {
    render() {
        return (
            <Row>
                <Col sm={3}>
                    <WrappedSidebar />
                </Col>
                <Col sm={9}>
                    <Route path="/users/" exact component={UsersList} />
                    <Route path="/users/new/" exact component={UserForm} />
                </Col>
            </Row>
        )
    }
}

export default UsersPage;