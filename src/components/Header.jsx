import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ theme, toggleTheme }) => {
    return (
        <Navbar expand="lg" className="py-3">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-4 align-items-center">
                        <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/work">Projects</Nav.Link>

                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>

                        <div className={`custom-toggle ${theme} ms-lg-3`} onClick={toggleTheme} role="button" aria-label="Toggle Theme">
                            <div className="toggle-track">
                                <div className="toggle-icons">
                                    <FaSun className="icon sun" />
                                    <FaMoon className="icon moon" />
                                </div>
                                <div className="toggle-thumb" />
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
