import React from 'react'
import { Container, Form, FormControl, FormGroup, FormLabel, Button, Col, Row } from 'react-bootstrap'

function SignUp() {
    return (
        <div className='backgprime'>
            <div className='pt-2 pb-3'>
                <h1 className='roboto pe-3 accent' >Sign Up <span className='blue' >Now!</span> </h1>
                <Container className='backgblue pb-3'>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup className='pt-2'>
                                    <FormLabel className='accent h4'> Name </FormLabel>
                                    <FormControl type='text' placeholder='Name' />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup className='pt-2'>
                                    <FormLabel className='accent h4'> Email </FormLabel>
                                    <FormControl type='email' placeholder='example@email.com' />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <FormGroup className='pt-2'>
                                    <FormLabel className='accent h4'> Password </FormLabel>
                                    <FormControl type='password' placeholder='Password' />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup className='pt-2'>
                                    <FormLabel className='accent h4'> Confirm Password </FormLabel>
                                    <FormControl type='password' placeholder='Password' />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button variant='accent' className='mt-3' >Submit</Button>
                    </Form>
                </Container>
            </div>
        </div>
    )
}

export default SignUp