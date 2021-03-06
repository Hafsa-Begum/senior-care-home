import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../navLogo.png';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{
                backgroundColor: "#03045e"
            }} variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/home#home"><img style={{
                        height: "60px",
                        width: "60px"
                    }} src={logo} className='rounded-circle' alt="" /><br /><h6 className='text-white fst-italic'>Senior Care Home</h6></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end menu">

                        <Nav.Link className='menu-item' as={HashLink} to="/home#home">Home</Nav.Link>

                        <Nav.Link className='menu-item' as={HashLink} to="/home#services">Services</Nav.Link>

                        <Nav.Link className='menu-item' as={HashLink} to="/about">About</Nav.Link>

                        <Nav.Link className='menu-item' as={HashLink} to="/Career">Career</Nav.Link>

                        <Nav.Link className='menu-item' as={HashLink} to="/home#faqs">FAQs</Nav.Link>
                        {
                            user?.email ?
                                <button
                                    onClick={logOut} style={{ backgroundColor: "tomato" }} className="btn text-white">Logout</button>
                                :
                                <Nav.Link className='menu-item' as={HashLink} to="/login">Login</Nav.Link>
                        }

                        <Navbar.Text>
                            {
                                user?.email && <NavLink className='menu-item' style={{
                                    textDecoration: 'none',
                                    marginLeft: '15px'
                                }} to="/login">Hi, <span style={{ color: 'tomato' }}>{user?.displayName}</span></NavLink>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;