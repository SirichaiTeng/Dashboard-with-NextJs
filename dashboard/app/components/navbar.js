'use client'
import { useEffect } from 'react';
import Link from "next/link";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Navbar2() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return (
        <div className='col-lg-12 col-m-6'>
            <div className="d-flex justify-content-between bg-body-tertiary">
                <Navbar bg="light" expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
                        <Navbar.Collapse id="navbarNavAltMarkup">
                            <Nav className="me-auto navcustom">
                                <Link href="/" passHref legacyBehavior>
                                    <Nav.Link>Home</Nav.Link>
                                </Link>
                                <Link href="/dashboard" passHref legacyBehavior>
                                    <Nav.Link>Dashboard</Nav.Link>
                                </Link>
                                <Link href="/contact" passHref legacyBehavior>
                                    <Nav.Link>Contact</Nav.Link>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="navbar-nav p-3 navcustom">
                    <Link href="/login" passHref legacyBehavior>
                        <Nav.Link>Login</Nav.Link>
                    </Link>
                </div>
            </div>
        </div>
    );
}