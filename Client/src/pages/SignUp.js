import React, { useState, useEffect } from 'react'
import { Container, Form, FormControl, FormGroup, FormLabel, Button, Col, Row, Alert } from 'react-bootstrap'
import Axios from 'axios'
import Login from '../components/login'

function SignUp() {
    const [showLog, setShowLog] = useState(false);
    const [log, setLog] = useState();
    

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        admin: false
    })

    const [errror, setErrror] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({...data, [input.name]: input.value})
        // console.log(data)
    }

    // Add User
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:5002/api/users';
            console.log(data);
            const {data: res} = await Axios.post(url, data);
            // setLog( <Login show={showLog} /> );
            console.log(res.message);
            setErrror(res.message);
        } catch (error) {
            if (error.response && 
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setErrror(error.response.data.message)
            }
            
        }
    }

    // display log in
    const handleLog = (e) => {
        setShowLog(false);
        setLog(log + '1');
        console.log('click '+ showLog);
    }

    useEffect(() => {
        setShowLog(true);
        console.log('use ' + showLog);
    }, [log]);
    

    return (
        <div className='backgprime vh-100'>
            <div className='pt-2 pb-3'>
                <h1 className='roboto pe-3 accent' >Sign Up <span className='blue' >Now!</span> </h1>
                <Container className='backgblue pb-3'>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <FormGroup className='pt-2'>
                                    <FormLabel className='accent h4'> Name </FormLabel>
                                    <FormControl name='firstname' value={data.firstname} required onChange={handleChange} type='text' placeholder='Name' />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup className='pt-2'>
                                    <FormLabel className='accent h4'> Surname </FormLabel>
                                    <FormControl name='lastname' value={data.lastname} required onChange={handleChange} type='text' placeholder='Surname' />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <FormGroup className='pt-2'>
                                    <FormLabel className='accent h4'> Email </FormLabel>
                                    <FormControl name='email' value={data.email} required onChange={handleChange} type='email' placeholder='example@email.com' />
                                </FormGroup>
                            </Col>

                            <Col>
                                <FormGroup className='pt-2'>
                                    <FormLabel className='accent h4'> Password </FormLabel>
                                    <FormControl name='password' value={data.password} required onChange={handleChange} type='password' placeholder='Password' />
                                </FormGroup>
                            </Col>
                        </Row>
                        {errror && <Alert className='mt-3' >{errror}</Alert>}
                        <Button type='submit' variant='accent' className='mt-3 me-3' > Submit </Button>
                        <Button onClick={handleLog} variant='accent' className='mt-3 ms-3' > Log In </Button>
                    </Form>
                </Container>
            </div>

            {/* Log in Modal */}
            {showLog && <Login show={showLog} />  }
        </div>
    )
}

export default SignUp