import React, { useState, useEffect } from 'react'
import { Row, Col, Accordion } from 'react-bootstrap'
import AllProdCard from '../components/allprodcard'
import Axios from 'axios'
import '../products.css'
import Footer from '../components/footer'

function Products() {
    const [title, setTitle] = useState('All');
    const [allProd, setAllProd] = useState();
    const [reRender, setReRender] = useState(false);
    const [call, setCall] = useState('http://localhost:5002/api/getwatches');
    // const [updateWatches, setUpdateWatches] = useState(true)

    // find and display watches in brand filter
    const handleFilterBrand = (event, param) => {
        setCall('http://localhost:5002/api/brandwatches/' + param);
        console.log(param);
        setReRender(true);
        setTitle(param);
    };

    // find and display watches in strap filter
    const handleFilterStrap = (event, param) => {
        setCall('http://localhost:5002/api/strapwatches/' + param);
        console.log(param);
        setReRender(true);
        setTitle(param);
    };

    const handleAll = (event, param) => {
        setCall('http://localhost:5002/api/getwatches');
        console.log(param);
        setReRender(true);
        setTitle(param);
    };

    // load and display all watches
    useEffect(() => {
        Axios.get(call)
            .then(result => {
                let data = result.data;
                console.log(data);
                let renderProducts = data.map((temp) => <AllProdCard key={temp._id} id={temp._id} brand={temp.brand} price={temp.price} model={temp.model} image={temp.image} />);
                setAllProd(renderProducts);
                setReRender(false);
                // console.log(allProd);
                // setUpdateWatches(false);
            })
            .catch(err => console.log(err));

    }, [reRender])

    return (
        <div  className='backgprime' >
            <div className='backgprime px-5 pb-4'>
                <Row>
                    <Col md={12} lg={2} className='backgblue my-2 rounded'>
                        <h1 className='roboto prime pt-1'>Filters</h1>
                        <Accordion flush className='my-2 custom-accordion'>
                            <Accordion.Item eventKey='0' className='custom-accordion'>
                                {/* accordion for brand filters */}
                                <Accordion.Header className='header roboto'> Brands </Accordion.Header>
                                <Accordion.Body style={{ color: '#FF5035', backgroundColor: '#2C3439' }}>
                                    <ul className='no-bullets' id='brands'>
                                        <li onClick={event => handleAll(event, 'All')} className='listitem' >All</li>
                                        <li onClick={event => handleFilterBrand(event, 'Casio')} className='listitem' >Casio</li>
                                        <li onClick={event => handleFilterBrand(event, 'Cartier')} className='listitem' >Cartier</li>
                                        <li onClick={event => handleFilterBrand(event, 'Patek Phillippe')} className='listitem' >Patek Philippe</li>
                                        <li onClick={event => handleFilterBrand(event, 'Fossil')} className='listitem' >Fossil</li>
                                        <li onClick={event => handleFilterBrand(event, 'Tissot')} className='listitem' >Tissot</li>
                                        <li onClick={event => handleFilterBrand(event, 'Seiko')} className='listitem' >Seiko</li>
                                        <li onClick={event => handleFilterBrand(event, 'Hamilton')} className='listitem' >Hamilton</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            {/* accordion for strap filters */}
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header className='header roboto'> Straps </Accordion.Header>
                                <Accordion.Body style={{ color: '#FF5035', backgroundColor: '#2C3439' }}>
                                    <ul className='no-bullets' id='straps'>
                                        <li onClick={event => handleAll(event, 'All')} className='listitem' >All</li>
                                        <li onClick={event => handleFilterStrap(event, 'Leather')} className='listitem' > Leather </li>
                                        <li onClick={event => handleFilterStrap(event, 'Metal')} className='listitem' > Metal </li>
                                        <li onClick={event => handleFilterStrap(event, 'Resin')} className='listitem' > Resin </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
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
            <Footer />
        </div>
    )
}

export default Products