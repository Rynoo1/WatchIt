import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import watch from '../images/watch.jpg';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default function TopSlider() {
    return (

        <Carousel>
            <Carousel.Item className='backgblue'>
                <Container className='pt-1 mt-5'>
                    {/* <Row> */}
                        {/* <Container className='mt-5'> */}
                            <img className='right mb-3 me-2' src={watch}/>
                            <h1 className='white display-6 roboto'>New Watches</h1>
                            <h4 className='white condensed slidertext'>Lorem ipsum dolor sit amet consectetur. Molestie eleifend integer tincidunt facilisi mollis dignissim tellus.</h4>
                            <Button variant='accent condensed'>Shop Now</Button>
                        {/* </Container> */}
                    {/* </Row> */}
                </Container>
            </Carousel.Item>

            <Carousel.Item className='backgblue'>
                <Container className='pt-1'>
                    <Row>
                        <Container className='col my-5'>
                            <h3 className='white'>New Watches</h3>
                            <h4 className='white my-3'>Shop all new wathces now</h4>
                            <Button variant='accent'>Shop Now</Button>
                        </Container>
                        <img className='col' src={watch} height={"600px"} />
                    </Row>
                </Container>
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item className='backgblue'>
                <Container className='pt-1'>
                    <Row>
                        <Container className='col my-5'>
                            <h3 className='white'>New Watches</h3>
                            <h4 className='white my-3'>Shop all new wathces now</h4>
                            <Button variant='accent'>Shop Now</Button>
                        </Container>
                        <img className='col' src={watch} height={"600px"} />
                    </Row>
                </Container>
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>

        </Carousel>
    );
};
