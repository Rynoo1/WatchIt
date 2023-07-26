import React, { useState } from 'react';
import { Table, Modal, Button, Image } from 'react-bootstrap'
import patek from '../images/patek.webp';
import casio from '../images/casioprod1.png';
import cartier from '../images/cartiertankmetal.webp';

function Inventory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(show);
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

            <Modal onShow={show} onHide={handleClose}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Edit Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Modal Body Modal Body Modal Body
                </Modal.Body> */}
                hellow
            </Modal>
        </div>
    )
}

export default Inventory