import React, { useState, useEffect } from 'react'
import { Button, Col } from 'react-bootstrap';

function HomeCard(props) {
    
    const handleview = () => {
        sessionStorage.setItem('productId', props.id)
        window.location = '/prod';
    }

    return (
        <Col xs={6} sm={3} className='backgblue rounded me-2 mb-1 py-2'>
            <img className='img-thumbnail' src={'http://localhost:5002/images/' + props.image} />
            <h5 className='condensed text-light mt-2'> {props.brand + " " + props.model} </h5>
            <h5 className='condensed text-light mt-2'> {"R " + props.price} </h5>
            <Button variant='add' className='mb-2 me-2' onClick={handleview} > View More </Button>
            {/* <Button variant='add' className='mb-2'> Add to cart </Button> */}
        </Col>
    )
}

export default HomeCard;
