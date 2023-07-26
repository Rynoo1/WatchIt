import React from 'react';
import { Container, Row, Col, Form, Table, Image } from 'react-bootstrap';
import CasioProduct from '../images/casioprod1.png';

function CheckOut() {
  return (
    <div>
         <Container>
            <Row>
                <Col className='backgaccent me-2'>
                    <h3 className='roboto'>Personal Information</h3>
                    <Form>
                        <Form.Group as={Row} className='mb-2'>
                            <Form.Label column xl={{span:2, offset:1}} className='roboto'>Field 1</Form.Label>
                            <Col xl={5}><Form.Control/></Col> 
                        </Form.Group>
                        <Form.Group as={Row} className='mb-2'>
                            <Form.Label column xl={{span:2, offset:1}} className='roboto'>Field 2</Form.Label>
                            <Col xl={5}><Form.Control/></Col> 
                        </Form.Group>
                        <Form.Group as={Row} className='mb-2'>
                            <Form.Label column xl={{span:2, offset:1}} className='roboto'>Field 3</Form.Label>
                            <Col xl={5}><Form.Control/></Col> 
                        </Form.Group>
                    </Form>
                </Col>

                <Col className='backgprime'>
                    <h3 className='roboto'>Cart</h3>
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
                </Col>
            </Row>
            <Row className='backgprime mt-3 mx-3'>
                <h3 className='roboto'>Payment information</h3>
            </Row>
         </Container>
    </div>
  )
}

export default CheckOut