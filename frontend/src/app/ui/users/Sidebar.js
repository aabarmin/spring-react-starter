import React, { Component } from 'react';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import {Link} from "react-router-dom";

class Sidebar extends Component {
    select(id) {
        this.props.selectSection(id);
    }

    render() {
        return (
            <Nav stacked bsStyle="pills" activeKey={this.props.activeSection}>
                <NavItem eventKey={1} componentClass={Link} href="/users/" to="/users/" onClick={() => this.select(1)}>
                    All Users
                </NavItem>
            </Nav>
        )
    }
}

export default Sidebar;