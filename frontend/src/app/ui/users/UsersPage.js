import React, { Component } from 'react';
import {Col, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {userSave, usersLoad, userSwitchToEdit} from "../../store/reducers/users/users";
import UsersList from "./UsersList";

const listProps = state => ({
    users: state.users.users,
    isLoading: state.users.isLoading
});

const listActions = dispatch => ({
    usersLoad: () => {
        dispatch(usersLoad());
    },
    userSwitchToEdit: (id) => {
        dispatch(userSwitchToEdit(id));
    },
    userSave: (data) => {
        dispatch(userSave(data));
    }
});

const WrappedList = connect(listProps, listActions)(UsersList);

class UsersPage extends Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    <WrappedList/>
                </Col>
            </Row>
        )
    }
}

export default UsersPage;