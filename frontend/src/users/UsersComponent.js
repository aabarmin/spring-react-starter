import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Sidebar from './Sidebar';
import Content from './Content';

class UsersComponent extends Component {
    render() {
        return (
            <Row>
                <Col sm={3}>
                    <Sidebar/>
                </Col>
                <Col sm={9}>
                    <Content/>
                </Col>
            </Row>
        )
    }
}

export default UsersComponent;