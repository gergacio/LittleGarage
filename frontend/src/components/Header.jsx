import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

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
                    <Navbar.Brand href="/">littlegarage.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/cart">
                                <FaShoppingCart />
                                Cart
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <FaUser />
                                Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
