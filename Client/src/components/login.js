import React, { useState } from 'react'
import { Button, Row, Col, Form, FormControl, FormGroup, FormLabel, Modal, ModalBody, ModalFooter, Alert, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const signIn = (e) => {
        window.location = "/signup"
    };

    const [errror, setErrror] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:5002/api/auth'
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            localStorage.setItem("admin", res.admin);
            if (res.admin === false) {
                window.location = '/checkout';
            }else if (res.admin === true) {
                window.location = '/inventory';
            }

            console.log(res.message);
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setErrror(error.response.data.message)
            }
        }
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title className='roboto'>Log in</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <FormLabel className='roboto'>Email</FormLabel>
                            <FormControl name='email' value={data.email} required onChange={handleChange} type="email" />
                        </FormGroup>

                        <FormGroup className='pt-2' >
                            <FormLabel className='roboto'>Password</FormLabel>
                            <FormControl name='password' value={data.password} required onChange={handleChange} type="password" />
                        </FormGroup>
                        {errror && <Alert className='mt-3'>{errror}</Alert>}
                        <Row>
                            <Col xs={3} className='mt-3'> <Button type='submit' variant='log' > Log In </Button> </Col>
                            <Col xs={{span:3, offset: 6}} className='mt-3'> <Button onClick={signIn} type='submit' variant='sign' > Sign Up </Button> </Col>
                        </Row>
                    </Form>
                </ModalBody>

            </Modal>

            {/* <Button onClick={handleShow} >Submit</Button> */}
        </div>
    )
}

export default Login