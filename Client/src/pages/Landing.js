import React, { useState, useEffect } from 'react'
import TopSlider from '../components/topslider';
import CasioProduct from '../images/casioprod.png';
import Cartier from '../images/cartiertankmetal.webp';
import Patek from '../images/patek.webp';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/footer';
import HomeCard from '../components/homecard';
import Axios from 'axios';

function Landing() {
    const [newProd, setNewProd] = useState();

    useEffect(() => {
        Axios.get('http://localhost:5002/api/newest')
            .then(result => {
                let data = result.data;
                console.log("data" + data);
                let renderProducts = data.map((temp) => <HomeCard key={temp._id} id={temp._id} brand={temp.brand} price={temp.price} model={temp.model} image={temp.image} />);
                setNewProd(renderProducts);
                // setReRender(false);
                console.log(newProd);
            })
            .catch(err => console.log(err));

    }, [])

    return (
        <>
            <TopSlider></TopSlider>
            <div className='backgprime'>
                <Container fluid className='px-5'>

                    <h1 className='roboto'>Newest</h1>

                    <Row className='pb-3 justify-content-center'>
                        {newProd}
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