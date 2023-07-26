import React, { useState } from 'react'
import { Row, Col, Accordion, Container, Image } from 'react-bootstrap'
import patek from '../images/patek.webp';

function Products() {
    const [title, setTitle] = useState('All');
    return (
        <div className='backgprime px-5'>
            <Row>
                <Col md={12} lg={2} className='backgblue my-2 rounded'>
                    <Accordion flush className='my-2'>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Filters</Accordion.Header>
                            <Accordion.Body>
                                <ul className='no-bullets'>
                                    <li>Filter</li>
                                    <li>Filter</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Brands</Accordion.Header>
                            <Accordion.Body>Brands brands brands</Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col className='blue roboto mx-2'>
                    <h1 className='roboto'>{title}</h1>
                    <Row className='mx-2 my-2'>
                        <Col className=''>
                            <Image fluid src={patek} thumbnail />
                            <h3>Patek - Price</h3>
                        </Col>
                        <Col className=''>
                            <Image fluid src={patek} />
                            <h3 className='backgblue prime rounded-bottom'>Patek - Price</h3>
                        </Col>
                        <Col className=''>
                            <Image fluid src={patek} />
                            <h3 className='backgblue accent rounded-bottom'>Patek - Price</h3>
                        </Col>
                    </Row>
                    <Row className='mx-2'>
                        <Col className=''>
                            <Image fluid src={patek} />
                            <h3 className=' accent rounded-bottom'>Patek - Price</h3>
                        </Col>
                        <Col className=''>ColOne</Col>
                        <Col className='backgblue'>ColOne</Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default Products