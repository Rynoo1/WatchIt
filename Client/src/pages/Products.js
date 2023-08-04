import React, { useState } from 'react'
import { Row, Col, Accordion, Container, Image } from 'react-bootstrap'
import patek from '../images/patek.webp';
//import '../products.css';

function Products() {
    const [title, setTitle] = useState('All');
    return (
        <div className='backgprime px-5'>
            <Row>
                <Col md={12} lg={2} className='backgblue my-2 rounded'>
                    <Accordion flush className='my-2 custom custom-accordion'>
                        <Accordion.Item eventKey='0' className='custom-accordion'>
                            <Accordion.Header className='header'>Filters</Accordion.Header>
                            <Accordion.Body style={{ color: '#FF5035', background: 'black', backgroundColor: 'black'}}>
                                <ul className='no-bullets'>
                                    <li>Filter</li>
                                    <li>Filter</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* <Accordion.Item eventKey='1'>
                            <Accordion.Header style={{ color: '#FF5035', background: 'transparent'}}>Brands</Accordion.Header>
                            <Accordion.Body>Brands brands brands</Accordion.Body>
                        </Accordion.Item> */}
                    </Accordion>
                </Col>
                <Col className='blue roboto mx-2'>
                    <h1 className='roboto'>{title}</h1>
                    <Row className='mx-2 my-2'>
                        <Col className='product'>
                            <Image fluid src={patek} />
                            <h3 className='backgblue prime rounded-bottom prodtxt'>Patek - Model</h3>
                        </Col>
                        <Col className=''>
                            <Image fluid src={patek} />
                            <h3 className='backgblue prime rounded-bottom'>Patek - Model</h3>
                            <h5 className='backgblue prime rounded-bottom' >Price</h5>
                        </Col>
                        <Col className=''>
                            <Image fluid src={patek} />
                            <h3 className='backgblue accent rounded-bottom'>Patek - Model</h3>
                        </Col>
                    </Row>
                    <Row className='mx-2'>
                        <Col className='product'>
                            <Image fluid src={patek} />
                            <h3 className='backgblue prime rounded-bottom prodtxt'>Patek - Model</h3>
                        </Col>

                        <Col className='product'>
                            <Image fluid src={patek} />
                            <h3 className='backgblue prime rounded-bottom prodtxt'>Patek - Model</h3>
                        </Col>

                        <Col className='product'>
                            <Image fluid src={patek} />
                            <h3 className='backgblue prime rounded-bottom prodtxt'>Patek - Model</h3>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default Products