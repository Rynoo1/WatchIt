import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import casio from '../images/casioprod1.png';
import casioback from '../images/casioprod2.png';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function IndividProd(props) {
  const myData = sessionStorage.getItem('productId');
  console.log("Productid "+myData);
  const [image, setImage] = useState(casio);
  const [product, setProduct] = useState([]);

  const changeImage1 = () => {
    setImage(casio);
  };
  const changeImage2 = () => {
    setImage(casioback);
  };

  useEffect(() => {
    Axios.get('http://localhost:5002/api/watch/'+myData)
      .then(result => {
        setProduct(result.data);
        console.log(product);
        console.log(product[1].image)
        // let renderWatches = watchData.map((temp) => <ProductCard key={temp._id} id={temp._id} brand={temp.brand} price={temp.price} model={temp.model} stock={temp.stock} strap={temp.strap} size={temp.size} year={temp.year} image={temp.image} />);
        // setWatches(renderWatches);
        // console.log(watches);
        // setUpdateWatches(false);
      })
      .catch(err => console.log(err));

  }, [])

  // const imgsrc = '"../images/' + product.image + '"';

  return (
    <div className='blue'>
      <Container fluid className='px-5 pb-3'>
        <Row xs={12}>
          <Col md className='backgblue' >
            <Image className='w-75 mb-2' rounded src={image} />

            <Col className=''>
              <Image className='w-25 me-2' src={casio} onClick={changeImage1} thumbnail />
              <Image className='w-25' src={casioback} onClick={changeImage2} thumbnail />
            </Col>

          </Col>

          <Col className='pt-3'>
            <div className='backgprime pb-4 rounded px-3 pt-2' >
              <h1 className='roboto pt-1 display-5'>{product.brand} {product.model} </h1>
              <h1 className='roboto'> About </h1>
              <p className='condensed mt-3 mb-4 fs-5 text-break'> {product.description} </p>
              <Row className='justify-content-centre'>
                <Col xs={6}> <h3 className='roboto'> R {product.price} </h3> </Col>
                <Col xs={2} className='ms-4 roboto'> <h3 className='roboto'>  QTY </h3> </Col>
                <Col xs={3}> <Form.Control type='number' /> </Col>
                {/* <Col xs={2} className=' roboto'>Style</Col>
                <Col xs={3}><Form.Control type='number' disabled></Form.Control></Col> */}
              </Row>
              <Row>
                <Col className='mt-3'>
                  <Button variant='add'>Add to cart</Button>
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default IndividProd