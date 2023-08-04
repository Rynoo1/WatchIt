import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Modal, Table, Image, Row, Col } from 'react-bootstrap';
import CasioProduct from '../images/casioprod2.png';

export default function NavBar1() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar className='backgblue'>
            <Container>
                <Row className='w-100'>
                    <Col xs={3}>                
                    <Nav className='me-auto'>
                        <NavLink to="/allprod" className='linkaccent'><h3 className='roboto'>Products</h3></NavLink>
                    </Nav>
                    </Col>

                    <Col xs={6}>
                    <NavbarBrand href="/" className='mx-auto'> <h1 className='prime roboto display-5'>Watch<span className='accent'>It</span></h1> </NavbarBrand>
                    </Col>

                    <Col xs={{span:1, offset:2}} >                
                        <Nav className='ms-auto'>
                        <NavLink className='linkaccent' onClick={handleShow}> <h3 className='roboto'>Cart</h3> </NavLink>
                    </Nav>
                    </Col>
                </Row>

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
                                <th>Total:</th>
                                <th className='right'>Price in rand</th>
                            </tr>
                        </thead>
                    </Table>
                </Modal.Footer>

            </Modal>
        </Navbar>
    );
};
