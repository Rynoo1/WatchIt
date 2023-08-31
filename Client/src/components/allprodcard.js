import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import patek from '../images/patek.webp';


function AllProdCard(props) {
    // console.log(props);
    const handleButtonClick = () => {
        console.log("Navigate")
        // Set data in sessionStorage
        sessionStorage.setItem('productId', props.id);
        // Navigate to the target page
        // history.push('/prod');
        window.location = '/prod';
      };
    
    return (
        <Col xs={12} md={4}>
            <Image className='pt-2' fluid src={props.image} />
            <Col className='rounded-bottom productstxt pb-2'>
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