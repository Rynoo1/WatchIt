import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Image, Form, FormLabel, FormGroup, Row, Col, Accordion, FormControl } from 'react-bootstrap'
import ProductCard from '../components/productcard';
import Axios from 'axios';
import Footer from '../components/footer';

function Inventory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [watches, setWatches] = useState();
    const [updateWatches, setUpdateWatches] = useState(false);


    const [pBrand, setPBrand] = useState();
    const [pModel, setPModel] = useState();
    const [pStrap, setPStrap] = useState();
    const [pSize, setPSize] = useState();
    const [pPrice, setPPrice] = useState();
    const [pStock, setPStock] = useState();
    const [pYear, setPYear] = useState();
    const [pImage, setPImage] = useState();

    const getImage = (e) => {
        let imageFile = e.target.files[0];
        console.log(imageFile);
        setPImage(imageFile);

        let reader = new FileReader();
        reader.onload = () => {
            let output = document.getElementById('preview');
            output.src = reader.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    };



    useEffect(() => {
        Axios.get('http://localhost:5002/api/getwatches')
            .then(result => {
                let watchData = result.data;
                console.log(watchData);
                // console.log(watchData[1].image)
                let renderWatches = watchData.map((temp) => <ProductCard key={temp._id} id={temp._id} brand={temp.brand} price={temp.price} model={temp.model} stock={temp.stock} strap={temp.strap} size={temp.size} year={temp.year} image={temp.image} />);
                setWatches(renderWatches);
                console.log(watches);
                setUpdateWatches(false);
            })
            .catch(err => console.log(err));

    }, [updateWatches])

    // useEffect(() => {
    //     axios.get('http://localhost:5002/api/getwatches')
    //     .then (result => setWatches(result.data) )
    //     .catch (err => console.log(err))
    // }, [updateWatches])


    const addWatch = (e) => {
        const payload = new FormData()

        let details = {
            brand: pBrand,
            model: pModel,
            year: pYear,
            strap: pStrap,
            size: pSize,
            stock: pStock,
            price: pPrice,
        }

        payload.append('information', JSON.stringify(details));
        payload.append('image', pImage);

        Axios.post('http://localhost:5002/api/addwatch', payload);
        setUpdateWatches(true);
        // document.getElementById("brandIn").value = "";
        // document.getElementById("modelIn").value = "";
        // document.getElementById("yearIn").value = "";
        // document.getElementById("strapIn").value = "";
        // document.getElementById("sizeIn").value = "";
        // document.getElementById("stockIn").value = "";
        // document.getElementById("priceIn").value = "";

    }

    return (
        <div>
            <Table variant='dark'  >
                <thead className='roboto'>
                    <tr>
                        <th className='w-25'>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>QTY</th>
                        <th>Edit</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='condensed'>

                    {watches}

                </tbody>
            </Table>

            <Accordion className='pb-3 px-2'>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header className='header'> Add a new Watch </Accordion.Header>
                    <Accordion.Body className="accordion-body">
                        <h1 className='pb-1' >List a new watch on the website</h1>
                        {/* <Form action="insertdoc.php" method="post"> */}
                        <Form>
                            <Row>
                                <Col className="mb-3 ms-auto">
                                    <FormGroup className='pt-2'>
                                        <FormLabel className='roboto h4'> Brand </FormLabel>
                                        <FormControl id='brandIn' onChange={(e) => setPBrand(e.target.value)} type='string' />
                                    </FormGroup>
                                </Col>

                                <Col className="mb-3 me-auto">
                                    <FormGroup className='pt-2'>
                                        <FormLabel className='roboto h4'> Model </FormLabel>
                                        <FormControl id='modelIn' onChange={(e) => setPModel(e.target.value)} type='string' />
                                    </FormGroup>
                                </Col>

                                <Col>
                                    <FormGroup className='pt-2'>
                                        <FormLabel className='roboto h4'> Year </FormLabel>
                                        <FormControl id='yearIn' onChange={(e) => setPYear(e.target.value)} type='number' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            {/* two inputs  */}

                            <Row>
                                <Col className="mb-3 ms-auto">
                                    <FormGroup className='pt-2'>
                                        <FormLabel className='roboto h4'> Strap Material </FormLabel>
                                        <FormControl id='strapIn' onChange={(e) => setPStrap(e.target.value)} type='string' />
                                    </FormGroup>
                                </Col>

                                <Col className="mb-3 me-auto">
                                    <FormGroup className='pt-2'>
                                        <FormLabel className='roboto h4'> Face Size (mm) </FormLabel>
                                        <FormControl id='sizeIn' onChange={(e) => setPSize(e.target.value)} type='number' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            {/* two inputs  */}

                            <Row>
                                <Col className="mb-3 ms-auto">
                                    <FormGroup className='pt-2'>
                                        <FormLabel className='roboto h4'> Price </FormLabel>
                                        <FormControl id='priceIn' onChange={(e) => setPPrice(e.target.value)} type='number' />
                                    </FormGroup>
                                </Col>

                                <Col className="mb-3 me-auto">
                                    <FormGroup className='pt-2'>
                                        <FormLabel className='roboto h4'> Stock </FormLabel>
                                        <FormControl id='stockIn' onChange={(e) => setPStock(e.target.value)} type='number' />
                                    </FormGroup>
                                </Col>
                            </Row>
                            {/* two inputs  */}

                            <Row className='mb-3'>
                                {/* <Col className="mb-3 ms-auto"> */}
                                    <Col xs={6} className="mb-3 me-auto">
                                        <FormGroup className='pt-2'>
                                            <FormLabel className='roboto h4'> Image </FormLabel>
                                            <FormControl id='imageIn' onChange={getImage} type='file' />
                                        </FormGroup>
                                    </Col>

                                    <Col xs={6}>
                                        <FormLabel className='roboto h4'> Description </FormLabel>
                                        <Form.Control as={'textarea'} rows={3} placeholder='Description' />
                                    </Col>

                                    <Col xs={6} className='pt-2'> <Image thumbnail id='preview' /> </Col>

                                {/* </Col> */}
                            </Row>
                            {/* Input */}

                            <Button variant='log' onClick={addWatch} > Submit </Button>
                            {/* submit button */}
                        </Form>
                        {/* form */}
                    </Accordion.Body>
                    {/* accordion body  */}
                </Accordion.Item>
                {/* accordion item  */}
            </Accordion>
            {/* accordion  */}

        </div>
    )
}

export default Inventory