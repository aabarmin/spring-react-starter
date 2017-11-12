import React, { Component } from 'react';
import {Col, ProgressBar, Row, Table} from "react-bootstrap";
import UsersListToolbar from "./UsersListToolbar";
import PropTypes from 'prop-types';
import UserViewRow from "./UserViewRow";
import UserEditRow from "./UserEditRow";

class UsersList extends Component {
    componentWillMount() {
        // load inital users list
        this.props.usersLoad();
    }

    render() {
        let loadProgress = null;
        if (this.props.isLoading) {
            loadProgress = <ProgressBar active now={100} />
        }
        const tableRows = [];
        this.props.users.forEach(user => {
            if (user.isEditable) {
                tableRows.push(
                    <UserEditRow user={user} key={user.id} userSave={this.props.userSave} />
                )
            } else {
                tableRows.push(<UserViewRow user={user} userSwitchToEdit={this.props.userSwitchToEdit} key={user.id}/>);
            }
        });

        return (
            <content>
                <Row>
                    <Col sm={12}>
                        <UsersListToolbar/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        {loadProgress}

                        <Table striped bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Login</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </content>
        )
    }
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        isEditable: PropTypes.bool.isRequired
    })).isRequired,
    isLoading: PropTypes.bool.isRequired,
    usersLoad: PropTypes.func.isRequired,
    userSwitchToEdit: PropTypes.func.isRequired,
    userSave: PropTypes.func.isRequired
};

export default UsersList;