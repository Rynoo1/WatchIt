import React from 'react'
import { Col, Row, Image, Button, Modal, Table, Form } from 'react-bootstrap';
import { useState } from 'react';
import Axios from 'axios';

const ProductCard = ({ id, brand, price, model, stock, strap, size, year, image }) => {
    const [show, setShow] = useState(false);
    const [showDel, setShowDel] = useState(false);
    const [showSuc, setShowSuc] = useState(false);

    // handle Closing and Showing of editing modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        updateWatch();
        setShow(false)
    };

    // handle closing and Showing of delete modal
    const handleCloseDel = () => setShowDel(false);
    const handleShowDel = () => setShowDel(true);
    const handleDel = () => {
        deleteWatch();
        setShowDel(false);
        setShowSuc(true);
    };

    // handle closing of Successful delete modal
    const handleCloseSuc = () => setShowSuc(false);

    const [uBrand, setUBrand] = useState();
    const [uModel, setUModel] = useState();
    const [uStrap, setUStrap] = useState();
    const [uSize, setUSize] = useState();
    const [uPrice, setUPrice] = useState();
    const [uStock, setUStock] = useState();
    const [uYear, setUYear] = useState();
    const [uDesc, setUDesc] = useState();
    const [uImage, setUImage] = useState(image);

    let id2 = id;

    // handle deleting watch
    const deleteWatch = (e) => {
        Axios.delete('http://localhost:5002/api/watch/' + id2);
        console.log('deleted watch');
        setShowSuc(true);
    };
    
    // get image from input on change
    const getImage = (e) => {
        let imageFile = e.target.files[0];
        setUImage(imageFile);
        console.log(uImage);

        let reader = new FileReader();
        reader.onload = () => {
            let output = document.getElementById('previewEdit');
            output.src = reader.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    // update Watch
    const updateWatch = (e) => {

        const payloadUp = new FormData()

        let details = {
            brand: uBrand,
            model: uModel,
            year: uYear,
            strap: uStrap,
            size: uSize,
            stock: uStock,
            price: uPrice,
            description: uDesc
        }
        payloadUp.append('information', JSON.stringify(details));
        payloadUp.append('imageUp', uImage);

        Axios.put('http://localhost:5002/api/watch/' + id2, payloadUp);
    };

    return (

        <>
            <tr>
                <td className='ps-3'> <Image fluid src={'http://localhost:5002/images/' + image} /> </td>
                <td> {brand} {model} </td>
                <td>R {price}</td>
                <td> {stock} </td>
                <td> <Button variant='add' onClick={handleShow}>Update</Button> </td>
                <td> <Button variant='add' onClick={handleShowDel}>Delete</Button> </td>
            </tr>

            {/* Display successfully deleted watch */}
            <Modal show={showSuc} onHide={handleCloseSuc}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleted</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Successfully deleted {brand} {model} !
                </Modal.Body>
            </Modal>

            {/* Modal to confirm deleting item */}
            <Modal show={showDel} onHide={handleCloseDel}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Are you sure you want to delete {brand} {model}?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='sign' onClick={handleCloseDel}> Cancel </Button>
                    <Button variant='add' onClick={handleDel} > Delete </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal to Edit watches */}
            <Modal show={show} onHide={handleClose} size='lg' >
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>

                <Modal.Body>
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
                                <td> <Form.Control onChange={(e) => setUPrice(e.target.value)} placeholder={price} /> </td>
                                <td> <Form.Control onChange={(e) => setUStock(e.target.value)} placeholder={stock} /> </td>
                                <td> <Form.Control onChange={(e) => setUYear(e.target.value)} placeholder={year} /> </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Row>
                        <Col xs={6}> <Form.Control as={'textarea'} rows={3} onChange={(e) => setUDesc(e.target.value)} placeholder='Description' /> </Col>
                        <Col xs={6}>
                            <Row> <Form.Control onChange={getImage} placeholder={image} type="file" /> </Row>
                            <Row> <Col xs={6} className='pt-2'> <Image thumbnail id='previewEdit'  /> </Col>  </Row>
                        </Col>
                    </Row>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant='add' onClick={handleSubmit}> Save Changes </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ProductCard