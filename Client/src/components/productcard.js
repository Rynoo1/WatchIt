import React from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap';

const productcard = (props) => {
    return (
        <div>
            <Col className='products'>
                <Image className='pt-2' fluid src={props.image} />
                <Col className='rounded-bottom productstxt pb-2'>
                    <h3 className='pt-2' > {props.brand} </h3>
                    <Row>
                        <Col xs={{ span: "auto", offset: 3 }} ><h3> R {props.price} </h3></Col>
                        <Col xs={{ span: "auto" }} > <Button variant='add' >ADD</Button> </Col>
                    </Row>
                </Col>
            </Col>
        </div>
    )
}

export default productcard