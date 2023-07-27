import React, { useState } from 'react';
import { Table, Modal, Button, Image, Form } from 'react-bootstrap'
import patek from '../images/patek.webp';
import casio from '../images/casioprod1.png';
import cartier from '../images/cartiertankmetal.webp';

function Inventory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Table variant='dark' >
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
                        <td>R Price</td>
                        <td>300</td>
                        <td> <Button variant='add' onClick={handleShow}>Update</Button> </td>
                    </tr>

                    <tr>
                        <td> <Image fluid src={cartier} /> </td>
                        <td>Cartier Tank</td>
                        <td>R Price</td>
                        <td>300</td>
                        <td> <Button>Update</Button> </td>
                    </tr>

                    <tr>
                        <td> <Image fluid src={patek} /> </td>
                        <td>Patek Philippe</td>
                        <td>R Price</td>
                        <td>300</td>
                        <td> <Button>Update</Button> </td>
                    </tr>

                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group className='mb-2'>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Inventory