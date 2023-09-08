import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../components/footer';
// import Login from '../components/login';

function IndividProd() {
  const myData = sessionStorage.getItem('productId');
  console.log("Productid " + myData);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [quan, setQuan] = useState(1);

  useEffect(() => {
    Axios.get('http://localhost:5002/api/watch/' + myData)
      .then(result => {
        setProduct(result.data);
        console.log(product);
      })
      .catch(err => console.log(err));

  }, []);

  const handleAddCart = (key, brand, model, price, image, quantity) => {
    const newItem = { key: key, brand: brand, model: model, image: image,price: price , quantity: quantity}
    const existingCart = JSON.parse(sessionStorage.getItem('Cart')) || [];
    const updatedCart = [...existingCart, newItem];
    setCart(updatedCart);
    sessionStorage.setItem('Cart', JSON.stringify(updatedCart));
    console.log(sessionStorage.getItem('Cart'));
  };

  return (
    <div className='blue'>
      <Container fluid className='px-5 pb-3'>
        <Row xs={12}>
          <Col md className='backgblue' >
            <Image className='w-75 mb-2' rounded src={'http://localhost:5002/images/' + product.image} />

            <Col className=''>
              <Image className='w-25 me-2' src={'http://localhost:5002/images/' + product.image} thumbnail />
            </Col>

          </Col>

          <Col className='pt-3 pe-5'>
            <div className='backgprime pb-4 rounded px-3 pt-2' >
              <h1 className='roboto pt-1 display-5'>{product.brand} {product.model} </h1>
              <h1 className='roboto'> About </h1>
              <p className='condensed mt-3 mb-4 fs-5 text-break'> {product.description} </p>
              <Row className='justify-content-centre'>
                <Col xs={6}> <h3 className='roboto'> R {product.price} </h3> </Col>
                <Col xs={2} className='ms-4 roboto'> <h3 className='roboto'>  QTY </h3> </Col>
                <Col xs={3}> <Form.Control type='number' defaultValue={1} onChange={(e) => setQuan(e.target.value)} /> </Col>
                {/* <Col xs={2} className=' roboto'>Style</Col>
                <Col xs={3}><Form.Control type='number' disabled></Form.Control></Col> */}
              </Row>
              <Row>
                <Col className='mt-3'>
                  <Button variant='add' onClick={() => handleAddCart(product._id, product.brand, product.model, product.price, product.image, quan)} >Add to cart</Button>
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default IndividProd