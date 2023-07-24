import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function NavBar1() {
    return (
        <Navbar className='backgblue'>
            <Container>
                <Nav className='me-auto'>
                    <NavLink href="/prod" className='linkaccent roboto'>Products</NavLink>
                </Nav>

                <NavbarBrand href="/"  className='me-5'> <h1 className='prime roboto display-5'>Watch<span className='accent'>It</span></h1> </NavbarBrand>

                <Nav className='ms-auto'>
                    <NavLink className='linkaccent me-auto roboto'>Cart</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};
