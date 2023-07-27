import React, { useState } from 'react'
import { Button, Table, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function OrderProcess() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Table responsive>
                <thead className='roboto'>
                    <tr className=''>
                        <th className='customhead'>Order Nr</th>
                        <th className='customhead'>Customer Name</th>
                        <th className='customhead'>Date</th>
                        <th className='customhead'>Total</th>
                        <th className='customhead'>See more</th>
                    </tr>
                </thead>
                <tbody className='condensed hover'>
                    <tr className='custom'>
                        <td className='custom'>#234</td>
                        <td className='custom'>Jonah</td>
                        <td className='custom'>Date</td>
                        <td className='custom'>R 3500</td>
                        <td className='custom'> <Link className='linkaccent' onClick={handleShow}>See</Link> </td>
                    </tr>
                    <tr className='custom'>
                        <td className='custom'>#234</td>
                        <td className='custom'>Jonah</td>
                        <td className='custom'>Date</td>
                        <td className='custom'>R 3500</td>
                        <td className='custom'> <Link className='linkaccent'>See</Link> </td>
                    </tr>
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Order Info</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Table>
                        <thead>
                            <tr>
                                <th>Order Nr</th>
                                <th>QTY</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Shipping</th>
                                <th>Payment type</th>
                                <th></th>
                            </tr>
                        </thead>
                    </Table>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default OrderProcess