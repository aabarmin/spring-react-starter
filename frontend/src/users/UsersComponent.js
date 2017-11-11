import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Sidebar from './Sidebar';
import Content from './Content';
import {connect} from "react-redux";

import { loadUsers } from '../app/store/reducers/users/users';

const sidebarProps = (store) => ({
    users: store.users.users
});

const sidebarActions = (dispatch) => ({
    load: () => { dispatch(loadUsers()) }
});

const WrappedContent = connect(sidebarProps, sidebarActions)(Content);

class UsersComponent extends Component {
    render() {
        return (
            <Row>
                <Col sm={3}>
                    <Sidebar/>
                </Col>
                <Col sm={9}>
                    <WrappedContent/>
                </Col>
            </Row>
        )
    }
}

export default UsersComponent;