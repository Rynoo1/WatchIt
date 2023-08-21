// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Container, Form, FormControl, FormGroup, FormLabel, Button, Col, Row, Alert } from 'react-bootstrap'
// import axios from 'axios'

// function SignUp() {

//     const [data, setData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: ""
//     })

//     const [errror, setErrror] = useState("");
//     const navigate = useNavigate();

//     const handleChange = ({ currentTarget: input }) => {
//         setData({...data, [input.name]: input.value})
//     }

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         try {
//             const url = 'http://localhost:5002/api/users'
//             const {data: res} = await axios.post(url, data);
//             navigate("/login")
//             console.log(res.message);
//         } catch (error) {
//             if (error.response && 
//                 error.response.status >= 400 &&
//                 error.response.status <= 500
//             ) {
//                 setErrror(error.response.data.message)
//             }
            
//         }
//     }

//     return (
//         <div className='backgprime'>
//             <div className='pt-2 pb-3'>
//                 <h1 className='roboto pe-3 accent' >Sign Up <span className='blue' >Now!</span> </h1>
//                 <Container className='backgblue pb-3'>
//                     <Form onSubmit={handleSubmit}>
//                         <Row>
//                             <Col>
//                                 <FormGroup className='pt-2'>
//                                     <FormLabel className='accent h4'> Name </FormLabel>
//                                     <FormControl name='firstName' value={data.firstName} required onChange={handleChange} type='text' placeholder='Name' />
//                                 </FormGroup>
//                             </Col>

//                             <Col>
//                                 <FormGroup className='pt-2'>
//                                     <FormLabel className='accent h4'> Surname </FormLabel>
//                                     <FormControl name='lastName' value={data.lastName} required onChange={handleChange} type='text' placeholder='example@email.com' />
//                                 </FormGroup>
//                             </Col>
//                         </Row>

//                         <Row>
//                             <Col>
//                                 <FormGroup className='pt-2'>
//                                     <FormLabel className='accent h4'> Email </FormLabel>
//                                     <FormControl name='email' value={data.email} required onChange={handleChange} type='email' placeholder='example@email.com' />
//                                 </FormGroup>
//                             </Col>

<<<<<<< HEAD
                            <Col>
                                <FormGroup className='pt-2'>
                                    <FormLabel className='accent h4'> Password </FormLabel>
                                    <FormControl name='Password' value={data.password} required onChange={handleChange} type='password' placeholder='Password' />
                                </FormGroup>
                            </Col>
                        </Row>
                        {/* {error && <Alert>{errror}</Alert>} */}
                        <Button type='submit' variant='accent' className='mt-3' >Submit</Button>
                    </Form>
                </Container>
            </div>
        </div>
    )
}
=======
//                             <Col>
//                                 <FormGroup className='pt-2'>
//                                     <FormLabel className='accent h4'> Password </FormLabel>
//                                     <FormControl name='Password' value={data.password} required onChange={handleChange} type='password' placeholder='Password' />
//                                 </FormGroup>
//                             </Col>
//                         </Row>
//                         {error && <Alert>{errror}</Alert>}
//                         <Button type='submit' variant='accent' className='mt-3' >Submit</Button>
//                     </Form>
//                 </Container>
//             </div>
//         </div>
//     )
// }
>>>>>>> main

// export default SignUp