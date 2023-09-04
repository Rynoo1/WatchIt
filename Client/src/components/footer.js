import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='backgblue'>
        <Row className='w-100 py-3 mt-3'>
            <Col><h1 className='prime'>Watch<span className='accent'>It</span></h1></Col>
            <Col sm={{span:2, offset: 4}} className='pt-2'><h2 className='roboto white'>About</h2></Col>
            <Col sm={3} className='pt-2'><h2 className='roboto white'>About</h2></Col>
            
        </Row>
    </div>
  )
}

export default Footer