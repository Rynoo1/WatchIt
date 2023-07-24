import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function IndividProd() {
  return (
    <div className='blue'>
      <Container fluid className='px-5'>
        <Row>
          <Col className='backgblue' >
            <div className='backgprime'>
              Image goes here
            </div>
            <Col className='backgaccent'>
              Images that are Smaller
            </Col>

          </Col>

          <Col className='backgaccent'>
            <div className='backgprime' style={{height:'500px'}}>
              <h1>Model Name and Number</h1>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default IndividProd