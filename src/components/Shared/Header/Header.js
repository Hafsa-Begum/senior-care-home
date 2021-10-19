import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../navLogo.png';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/home#home"><img src={logo} className='rounded-circle w-50' alt="" /><br /><span className='text-dark fw-1'>Senior Care Home</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end text-dark">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#features">Features</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#Career">Career</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#faqs">FAQs</Nav.Link>
                        {
                            user.displayName ?
                                <button
                                    onClick={logOut} className="btn btn-dark">Logout</button>
                                :
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }

                        <Navbar.Text>
                            Signed in as: <Link to="/login">{user.displayName}</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;