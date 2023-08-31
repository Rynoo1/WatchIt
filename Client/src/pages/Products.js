import React, { useState, useEffect } from 'react'
import { Row, Col, Accordion, Container, Image, Button, Form } from 'react-bootstrap'
import patek from '../images/patek.webp'
import AllProdCard from '../components/allprodcard'
import Axios from 'axios'
import '../products.css'

function Products() {
    const [title, setTitle] = useState('All');
    const [allProd, setAllProd] = useState();
    // const [reRender, setReRender] = useState(false)
    // const [updateWatches, setUpdateWatches] = useState(true)

    useEffect(() => {
        Axios.get('http://localhost:5002/api/getwatches')
            .then(result => {
                let data = result.data;
                console.log(data);
                console.log(data[1].image);
                let renderProducts = data.map((temp) => <AllProdCard key={temp._id} id={temp._id} brand={temp.brand} price={temp.price} model={temp.model} image={temp.image} />);
                setAllProd(renderProducts);
                // console.log(allProd);
                // setUpdateWatches(false);
            })
            .catch(err => console.log(err));

    }, [])

    return (
        <div className='backgprime px-5'>
            <Row>
                <Col md={12} lg={2} className='backgblue my-2 rounded'>
                    <h1 className='roboto prime'>Filters</h1>
                    <Accordion flush className='my-2 custom-accordion'>
                        <Accordion.Item eventKey='0' className='custom-accordion'>
                            <Accordion.Header className='header'>Filters</Accordion.Header>
                            <Accordion.Body style={{ color: '#FF5035', background: 'black', backgroundColor: 'black' }}>
                                <ul className='no-bullets'>
                                    <li>Filter</li>
                                    <li>Filter</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* <Accordion.Item eventKey='1'>
                            <Accordion.Header style={{ color: '#FF5035', background: 'transparent'}}>Brands</Accordion.Header>
                            <Accordion.Body>Brands brands brands</Accordion.Body>
                        </Accordion.Item> */}
                    </Accordion>
                </Col>
                <Col className='blue roboto mx-2'>
                    <h1 className='roboto'>{title}</h1>
                    <Row>
                        {allProd}
                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default Products