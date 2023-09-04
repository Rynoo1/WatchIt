import React from 'react';
import TopSlider from '../components/topslider';
import CasioProduct from '../images/casioprod.png';
import Cartier from '../images/cartiertankmetal.webp';
import Patek from '../images/patek.webp';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/footer';

function Landing() {
    return (
        <>
            <TopSlider></TopSlider>
            <div className='backgprime'>
                <Container fluid className='px-5'>

                    <h1 className='roboto'>Newest</h1>
                    <Row className='pb-3 justify-content-center'>
                        <Col xs={6} sm={3} className='backgblue rounded me-2 mb-1 py-2'>
                            <img className='img-thumbnail' src={CasioProduct} />
                            <h5 className='condensed text-light mt-2'>Casio A100WE</h5>
                            <Button variant='add' className='mb-2 me-2'>View</Button>
                            <Button variant='add' className='mb-2'>Add to cart</Button>
                        </Col>

                        <Col xs={6} sm={3} className='backgblue rounded me-2 mb-1 py-2'>
                            <img className='img-thumbnail' src={Cartier} />
                            <h5 className='condensed text-light mt-2'>Cartier Tank</h5>
                            <Button variant='add' className='mb-2 me-2'>View</Button>
                            <Button variant='add' className='mb-2'>Add to cart</Button>
                        </Col>

                        <Col xs={6} sm={3} className='backgblue rounded me-2 mb-1 py-2'>
                            <img className='img-thumbnail' src={Patek} />
                            <h5 className='condensed text-light mt-2'>Patek Philippe watch</h5>
                            <Button variant='add' className='mb-2 me-2'>View</Button>
                            <Button variant='add' className='mb-2'>Add to cart</Button>
                        </Col>
                    </Row>

                    <h1 className='roboto'>Sale</h1>
                    <Row className='justify-content-center pb-3'>
                        <Col xs={6} sm={3} className='backgblue rounded me-2 mb-1 py-2'>
                            <img className='img-thumbnail' src={CasioProduct} />
                            <h5 className='condensed text-light mt-2'>Casio Retro Vintage watch</h5>
                            <Button variant='add' className='mb-2 me-2'>View</Button>
                            <Button variant='add' className='mb-2'>Add to cart</Button>
                        </Col>

                        <Col xs={6} sm={3} className='backgblue rounded me-2 mb-1 py-2'>
                            <img className='img-thumbnail' src={Cartier} />
                            <h5 className='condensed text-light mt-2'>Cartier Tank watch</h5>
                            <Button variant='add' className='mb-2 me-2'>View</Button>
                            <Button variant='add' className='mb-2'>Add to cart</Button>
                        </Col>

                        <Col xs={6} sm={3} className='backgblue rounded me-2 mb-1 py-2'>
                            <img className='img-thumbnail' src={Patek} />
                            <h5 className='condensed text-light mt-2'>Patek Philippe watch</h5>
                            <Button variant='add' className='mb-2 me-2'>View</Button>
                            <Button variant='add' className='mb-2'>Add to cart</Button>
                        </Col>
                    </Row>

                </Container>
                <Footer />
            </div>

        </>
    )
}

export default Landing