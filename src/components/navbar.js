import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Modal, Table, Image } from 'react-bootstrap';
import CasioProduct from '../images/casioprod2.png';

export default function NavBar1() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar className='backgblue'>
            <Container>
                <Nav className='me-auto'>
                    <NavLink href="/prod" className='linkaccent roboto'>Products</NavLink>
                </Nav>

                <NavbarBrand href="/"  className='me-5'> <h1 className='prime roboto display-5'>Watch<span className='accent'>It</span></h1> </NavbarBrand>

                <Nav className='ms-auto'>
                    <NavLink className='linkaccent me-auto roboto' onClick={handleShow}>Cart</NavLink>
                </Nav>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Current Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <Image fluid src={CasioProduct} /> </td>
                                <td>Casio A100</td>
                                <td>1</td>
                                <td>Price</td>
                                <td>remove</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>

                <Modal.Footer>
                    <Table>
                        <thead>
                            <tr>
                                <th>Total</th>
                                <th></th>
                                <th></th>
                                <th>Price</th>
                            </tr>
                        </thead>
                    </Table>
                </Modal.Footer>

            </Modal>
        </Navbar>
    );
};
