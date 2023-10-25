import React, { useState } from 'react'
import { Row, Col, Image, Button, Placeholder, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import patek from '../images/patek.webp'

function AllProdCard(props) {

    const [hover, setHover] = useState(false);

    const handleEnter = () => {
        setHover(true);
    }

    const handleLeave = () => {
        setHover(false);
    }

    const handleButtonClick = () => {
        console.log("Navigate")
        sessionStorage.setItem('productId', props.id);
        // Set data in sessionStorage
        window.location = '/prod';
        // Navigate to the target page
    };

    return (
        <Col xs={12} md={4} className= {hover ? 'hover' : ''} onMouseEnter={handleEnter} onMouseLeave={handleLeave} >
            <Image className='pt-2' fluid src={'http://localhost:5002/images/' + props.image} />
            <Col className={hover ? 'rounded-bottom productstxt pb-2 hover-text' : 'rounded-bottom productstxt pb-2'}>
                <h3 className='pt-2' > {props.brand} - {props.model} </h3>
                <Row>
                    <Col xs={{ span: "auto", offset: 3 }} ><h3> R {props.price} </h3></Col>
                    <Col xs={{ span: "auto" }} > <Button onClick={() => handleButtonClick()} variant='add'> View </Button> </Col>
                </Row>
            </Col>
        </Col>
    )
}

export default AllProdCard