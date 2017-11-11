import React, { Component } from 'react';
import {Col, Row} from "react-bootstrap";
import UsersListToolbar from "./UsersListToolbar";

class UsersList extends Component {
    render() {
        return (
            <content>
                <Row>
                    <Col sm={12}>
                        <UsersListToolbar/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        222
                    </Col>
                </Row>
            </content>
        )
    }
}

export default UsersList;