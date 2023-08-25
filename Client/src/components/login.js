import React, { useState } from 'react'
import { Button, Row, Col, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalFooter } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:5002/api/auth'
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/";
            
            console.log(res.message);
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }

        }
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>Log in</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormLabel>Email</FormLabel>
                            <FormControl name='email' value={data.email} required onChange={handleChange} type="email" />
                        </FormGroup>

                        <FormGroup className='pt-2' >
                            <FormLabel>Password</FormLabel>
                            <FormControl name='password' value={data.password} required onChange={handleChange} type="password" />
                        </FormGroup>
                    </Form>
                </ModalBody>

                <ModalFooter className='justify-center'>

                    <Row className='w-100'>
                        <Col> <Button type='submit' variant='log' > Log In </Button> </Col>
                    </Row>

                </ModalFooter>

            </Modal>

            <Button onClick={handleShow} >Submit</Button>
        </div>

    )
}

export default Login