import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import watch from '../images/watch.jpg';
import casio from '../images/retrocasio.jpg';
import tank from '../images/cartiertank.jpg'
import { Row, Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function TopSlider() {
    const handleClick = () => {
        window.location='/allprod';
    };

    return (

        <Carousel interval={null}>
            <Carousel.Item className='backgblue'>
                <Container className='pt-1 mt-5'>
                    <Row>
                        <Col>
                            <h1 className='white display-6 roboto'>New Watches</h1>
                            <h4 className='white condensed slidertext'> Shop all the latest watches at the best prices available. Pick up great watches at even better prices with regular sales. </h4>
                            <Button onClick={handleClick} variant='accent condensed mb-3'> Shop Now </Button>
                        </Col>

                        <Col>
                            <img className=' mb-3 me-2' src={watch} />
                        </Col>

                    </Row>
                </Container>
            </Carousel.Item>

            <Carousel.Item className='backgblue'>
                <Container className='pt-1 mb-4'>
                    <Row>
                        <Col><h1 className='pb-1 accent roboto'>Brand New Old</h1></Col>
                        <Col xl={12} className='pb-2'><Image fluid src={casio} /></Col>
                        <Col>
                            <h3 className='accent condensed pt-2 pb-3'>Shop Retro Watches</h3>
                        </Col>
                        <Col><Button onClick={handleClick} variant='accent'>Shop Now</Button></Col>
                    </Row>
                </Container>
            </Carousel.Item>

            {/* <Carousel.Item className='backgblue'>
                <Container className='mb-5 mt-4'>
                    <Row>
                        <Col xl={5}>
                            <h1 className='accent roboto'> Shop the Classics </h1>
                            <h2 className='text-light condensed pb-4 pt-3'>Timeless style </h2>
                        </Col>
                        <Col xl={7}>
                            <Image className='w-100' fluid src={tank} />
                        </Col>
                    </Row>
                    {/* <Row>
                        
                    </Row> 
                </Container>
            </Carousel.Item> */}

        </Carousel>
    );
};
