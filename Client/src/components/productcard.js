import React from 'react'
import { Col, Row, Image, Button, Modal, Table, Form } from 'react-bootstrap';
import { useState } from 'react';
import image1 from '../images/casioprod1.png';
import Axios from 'axios';

const ProductCard = ({ id, brand, price, model, stock, strap, size, year, image }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        updateWatch();
        setShow(false)
    };

    const [uBrand, setUBrand] = useState();
    const [uModel, setUModel] = useState();
    const [uStrap, setUStrap] = useState();
    const [uSize, setUSize] = useState();
    const [uPrice, setUPrice] = useState();
    const [uStock, setUStock] = useState();
    const [uYear, setUYear] = useState();
    const [uImage, setUImage] = useState();

    let id2 = id;

    const updateWatch = (e) => {
        let details = {
            brand: uBrand,
            model: uModel,
            year: uYear,
            strap: uStrap,
            size: uSize,
            stock: uStock,
            price: uPrice,
            image: uImage
        }

        Axios.put('http://localhost:5002/api/watch/' + id2, details);
        const formdata = new FormData ()
        formdata.append('file', uImage)
        Axios.post('http://localhost:5002/upload', formdata)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };

    let imgsrc = '"../images/' + image + '"';
    console.log(imgsrc);

    return (

        <>
            <tr>
                <td className='ps-3'> <Image fluid src={image1} /> </td>
                <td> {brand} {model} </td>
                <td>R {price}</td>
                <td> {stock} </td>
                <td> <Button variant='add' onClick={handleShow}>Update</Button> </td>
            </tr>


            <Modal show={show} onHide={handleClose} size='lg' >
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* <Form.Group className='mb-2' as={Row}>
                        <Form.Label column>Product Name</Form.Label>
                        <Col><Form.Control/></Col>
                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control/>
                    </Form.Group> */}

                    <Table>
                        <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Strap</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <Form.Control onChange={(e) => setUBrand(e.target.value)} placeholder={brand} /> </td>
                                <td> <Form.Control onChange={(e) => setUModel(e.target.value)} placeholder={model} /> </td>
                                <td> <Form.Control onChange={(e) => setUStrap(e.target.value)} placeholder={strap} /> </td>
                                <td> <Form.Control onChange={(e) => setUSize(e.target.value)} placeholder={size} /> </td>
                            </tr>
                            <tr>
                                <td> <Form.Control onChange={(e) => setUPrice(e.target.value)} placeholder={price} /> </td>
                                <td> <Form.Control onChange={(e) => setUStock(e.target.value)} placeholder={stock} /> </td>
                                <td> <Form.Control onChange={(e) => setUYear(e.target.value)} placeholder={year} /> </td>
                                <td> <Form.Control onChange={(e) => setUImage(e.target.value)} placeholder={image} type="file" /> </td>
                            </tr>
                        </tbody>
                    </Table>

                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleSubmit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ProductCard