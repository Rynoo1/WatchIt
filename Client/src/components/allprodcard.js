import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import patek from '../images/patek.webp';

function AllProdCard(props) {
    return (
        <Col xs={12} md={4}>
            <Image className='pt-2' fluid src={props.image} />
            <Col className='rounded-bottom productstxt pb-2'>
                <h3 className='pt-2' > {props.brand} - {props.model} </h3>
                <Row>
                    <Col xs={{ span: "auto", offset: 3 }} ><h3> R {props.price} </h3></Col>
                    <Col xs={{ span: "auto" }} > <Button variant='add'> ADD </Button> </Col>
                </Row>
            </Col>
        </Col>
    )
}

export default AllProdCard