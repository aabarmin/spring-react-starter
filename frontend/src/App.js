import React, { Component } from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';


class App extends Component {
  render() {
    return (
        <Grid>
            <Navbar>
                <NavbarHeader>
                    <NavbarBrand>
                        Sprint React Starter
                    </NavbarBrand>
                </NavbarHeader>
                <Nav>
                    <NavItem>Link 1</NavItem>
                    <NavItem>Link 2</NavItem>
                </Nav>
            </Navbar>
            <Row>
                <Col sm={3}>

                    <Nav stacked bsStyle="pills" activeKey={1}>
                        <NavItem eventKey={1}>Item 1</NavItem>
                        <NavItem eventKey={2}>Item 2</NavItem>
                        <NavItem eventKey={3}>Item 3</NavItem>
                        <NavItem eventKey={4}>Item 4</NavItem>
                        <NavItem eventKey={5}>Item 5</NavItem>
                    </Nav>

                </Col>
                <Col sm={9}>
                    Content
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default App;
