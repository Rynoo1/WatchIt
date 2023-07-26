import React from 'react'
import { Row, Col, Accordion, Container } from 'react-bootstrap'

function Products() {
    return (
        <div className='backgprime px-5'>
            <Row>
                <Col md={12} lg={2} className='backgaccent mb-2'>
                    <Accordion flush>
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
                <Col className='backgblue mx-2'>
                    <Row className='mx-2'>
                        <Col className='backgaccent'>ColOne</Col>
                        <Col className='backgprime'>ColOne</Col>
                        <Col className='backgblue'>ColOne</Col>
                    </Row>
                    <Row className='mx-2'>
                        <Col className='backgaccent'>ColOne</Col>
                        <Col className='backgprime'>ColOne</Col>
                        <Col className='backgblue'>ColOne</Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default Products