import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Panel from 'react-bootstrap/lib/Panel';

class Dashboard extends Component {
    render() {
        return (
            <Row>
                <Col sm={3}>
                    <Panel header="Dashboard section">
                        Section content
                    </Panel>
                </Col>
                <Col sm={3}>
                    <Panel header="Dashboard section">
                        Section content
                    </Panel>
                </Col>
                <Col sm={3}>
                    <Panel header="Dashboard section">
                        Section content
                    </Panel>
                </Col>
                <Col sm={3}>
                    <Panel header="Dashboard section">
                        Section content
                    </Panel>
                </Col>
            </Row>
        )
    }
}

export default Dashboard;