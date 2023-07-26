import React, { useState } from 'react'
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'
import casio from '../images/casioprod1.png';
import casioback from '../images/casioprod2.png';

function IndividProd() {

  const [image, setImage] = useState(casio);

  const changeImage1 = () => {
    setImage(casio);
  }
  const changeImage2 = () => {
    setImage(casioback);
  }

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

          <Col>
            <div className='backgprime pb-4 rounded px-3 pt-2' >
              <h1 className='roboto pt-1 display-5'>Casio - A100WE</h1>
              <h1 className='roboto'>About</h1>
              <p className='condensed mt-3 mb-4 fs-5 text-break'>Indulge your inner gadget geek with this stylish non-gendered timepiece straight from the Casio Vintage collection. The A100 line pays homage to the F‐100, the  first Casio watch built with a resin case.  We’ve kept the iconic layout with four front buttons but introduced metallic components, still vintage-style, for an updated take on a true classic.</p>
              <Row className='justify-content-centre'>
                <Col xs={2} className='ms-4 roboto'>QTY</Col>
                <Col xs={3}><Form.Control type='number'></Form.Control></Col>
                <Col xs={2} className=' roboto'>Style</Col>
                <Col xs={3}><Form.Control type='number' disabled></Form.Control></Col>
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