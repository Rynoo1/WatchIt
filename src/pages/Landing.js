import React from 'react';
import TopSlider from '../components/topslider';
import CasioProduct from '../images/casioprod.png';
import Cartier from '../images/cartiertankmetal.webp';
import Patek from '../images/patek.webp';
import { Col, Container, Row } from 'react-bootstrap';

function Landing() {
    return (
        <>
            <TopSlider></TopSlider>
            <div className='backgprime'>
                <Container fluid className='px-5'>

                    <h1 className='roboto'>Newest</h1>
                    <Row className='mx-3 pb-3 justify-content-center'>
                        <Col xl={3} className='backgblue rounded me-2'>
                            <img className='img-thumbnail' src={CasioProduct} />
                            <h5 className='condensed text-light'>Casio Retro Vintage watch</h5>
                        </Col>

                        <Col xl={3} className='backgblue rounded mx-5'>
                            <img className='img-thumbnail' src={Cartier} />
                            <h5 className='condensed text-light'>Cartier Tank watch</h5>
                        </Col>

                        <Col xl={3} className='backgblue rounded ms-2'>
                            <img className='img-thumbnail' src={Patek} />
                            <h5 className='condensed text-light'>Patek Philippe watch</h5>
                        </Col>
                    </Row>

                    <h1 className='roboto'>Sale</h1>
                    <Row>
                        
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default Landing