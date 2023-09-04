import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../components/footer';
import Login from '../components/login';

function IndividProd() {
  const myData = sessionStorage.getItem('productId');
  console.log("Productid " + myData);
  // const [image, setImage] = useState(casio);
  const [product, setProduct] = useState([]);
  const user = localStorage.getItem("token");
  const [showLog, setShowLog] = useState(true);
  const [cart, setCart] = useState([]);
  const [quan, setQuan] = useState(1);
  const [count, setCount] = useState(1);
  const [upCart, setUpCart] = useState([]);
  // const quant = useRef(0);
  // const changeImage1 = () => {
  //   setImage(casio);
  // };
  // const changeImage2 = () => {
  //   setImage(casioback);
  // };

  useEffect(() => {
    Axios.get('http://localhost:5002/api/watch/' + myData)
      .then(result => {
        setProduct(result.data);
        console.log(product);
      })
      .catch(err => console.log(err));

  }, []);

  useEffect(() => {
    try {
      console.log(quan);
      // setCart([JSON.parse(sessionStorage.getItem('Cart'))]);
      setUpCart([cart]);
      console.log(upCart)
      setCount(count+1);
      setUpCart([...upCart, { key: count, id: myData, brand: product.brand, model: product.model, image: product.image,price: product.price , quantity: quan}]);
      sessionStorage.setItem('Cart', JSON.stringify(upCart));
      // sessionStorage.setItem('Cart', '');
    } catch (error) {
      setShowLog(true);
    }
  }, [cart]);

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
                  <Button variant='add' onClick={(e) => setCart([JSON.parse(sessionStorage.getItem('Cart'))])} >Add to cart</Button>
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
      </Container>
      <Login show={showLog} />
      <Footer/>
    </div>
  )
}

export default IndividProd