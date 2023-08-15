import React, { useState } from 'react'
import { Button, Row, Col, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalFooter } from 'react-bootstrap'

function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton >
                <Modal.Title>Log in</Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" />
                    </FormGroup>
                    
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" />
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter className='justify-center'>

                <Row className='w-100'>
                    <Col> <Button> Sign In </Button> </Col>
                    <Col xs={{offset:6}} > <Button> Sign Up </Button> </Col>
                </Row>

            </ModalFooter>

        </Modal>

        <Button onClick={handleShow} >Submit</Button> 
    </div>

  )
}

export default Login