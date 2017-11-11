import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class Header extends Component {
    render() {
        return (
            <Navbar>
                <NavbarHeader>
                    <NavbarBrand>
                        Sprint React Starter
                    </NavbarBrand>
                </NavbarHeader>
                <Nav>
                    <NavItem>
                        <Link to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/users/">Users</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;