import React, { Component } from 'react';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class Sidebar extends Component {
    render() {
        return (
            <Nav stacked bsStyle="pills" activeKey={1}>
                <NavItem eventKey={1}>Item 1</NavItem>
                <NavItem eventKey={2}>Item 2</NavItem>
                <NavItem eventKey={3}>Item 3</NavItem>
                <NavItem eventKey={4}>Item 4</NavItem>
                <NavItem eventKey={5}>Item 5</NavItem>
            </Nav>
        )
    }
}

export default Sidebar;