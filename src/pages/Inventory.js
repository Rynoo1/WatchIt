import React, { useState } from 'react';
import { Table, Modal, Button, Image, Form, Row, Col } from 'react-bootstrap'
import patek from '../images/patek.webp';
import casio from '../images/casioprod1.png';
import cartier from '../images/cartiertankmetal.webp';
import Footer from '../components/footer';

function Inventory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Table variant='dark'  >
                <thead className='roboto'>
                    <tr>
                        <th className='w-25'>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>QTY</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody className='condensed'>
                    <tr>
                        <td className='ps-3'> <Image fluid src={casio} /> </td>
                        <td>Casio A100</td>
                        <td>R 1500</td>
                        <td>300</td>
                        <td> <Button variant='add' onClick={handleShow}>Update</Button> </td>
                    </tr>

                    <tr>
                        <td> <Image fluid src={cartier} /> </td>
                        <td>Cartier Tank</td>
                        <td>R Price</td>
                        <td>300</td>
                        <td> <Button variant='add' onClick={handleShow}>Update</Button> </td>
                    </tr>

                    <tr>
                        <td> <Image fluid src={patek} /> </td>
                        <td>Patek Philippe</td>
                        <td>R Price</td>
                        <td>300</td>
                        <td> <Button variant='add' onClick={handleShow}>Update</Button> </td>
                    </tr>

                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose} size='lg' >
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* <Form.Group className='mb-2' as={Row}>
                        <Form.Label column>Product Name</Form.Label>
                        <Col><Form.Control/></Col>
                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control/>
                    </Form.Group> */}

                <Table>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <Form.Control placeholder='Casio' /> </td>
                            <td> <Form.Control placeholder='A-100WE' /> </td>
                            <td> <Form.Control placeholder='R 1500' /> </td>
                            <td> <Form.Control placeholder='300' /> </td>
                        </tr>
                    </tbody>
                </Table>

                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Inventory