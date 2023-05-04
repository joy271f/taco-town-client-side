import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const user = null;
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Taco-Town</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-white mx-2 text-decoration-none' to="/">Home</Link>
                        <Link className='text-white mx-2 text-decoration-none' to="/">Blog</Link>
                    </Nav>
                    <Nav>
                        {user ?
                            <Button variant="success">Logout</Button> :
                            <Button variant="success">Login</Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;