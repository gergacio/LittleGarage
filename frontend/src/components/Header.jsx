import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";

function Header() {
    return (
        <header>
            <Navbar
                bg="warning"
                className="yellow"
                variant="dark"
                expand="md"
                collapseOnSelect
            >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img
                                className="w-50 p-3"
                                src={logo}
                                alt="little garage"
                            />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <FaShoppingCart />
                                    Cart
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <FaUser />
                                    Sign In
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
