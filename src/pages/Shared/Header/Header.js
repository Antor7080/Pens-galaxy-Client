import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

    return (

        <div className="header-section " >
            <Navbar bg="dark" fixed="top" expand="lg">
                <Container className="text-center">

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home"><img
                                src={logo}
                                width="30"
                                height="30"

                                className="d-inline-block me-3 align-top"
                                alt="React Bootstrap logo"
                            />Home</Nav.Link>

                            <Nav.Link as={Link} to="/allPens">All Pens</Nav.Link>

                        </Nav>
                        {user?.email ?
                            <> <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/dashbord">Dashboard</Nav.Link>
                                <Button className="logout-btn" onClick={logOut} >Logout</Button>
                            </Nav>


                                <img className="rounded-circle text-right mx-2" width="40" height="40" src={user?.photoURL} alt="" />





                            </>

                            :

                            <>

                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;