import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = props => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                React Sails Template
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <LinkContainer exact to="/">
                    <NavItem>
                        Home
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                    <NavItem>
                        About
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/signin">
                    <NavItem>
                        Signin
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/signup">
                    <NavItem>
                        Sign up
                    </NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
