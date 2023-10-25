import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Modal, Table, Image, Row, Col, Button } from 'react-bootstrap';
// import Cart from './cart';

export default function NavBar1() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // get cart from session storage
  useEffect(() => {
    try {
      const cartData = JSON.parse(sessionStorage.getItem('Cart')) || [];
      setCart(cartData);

      // Calculate the total price of items in the cart
      const cartTotal = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotal(cartTotal);
    } catch (error) {
      console.log('cart empty');
    }
  }, [show]);

  // remove an item from the cart
  const removeFromCart = (itemKey) => {
    const updatedCart = cart.filter((item) => item.key !== itemKey);
    setCart(updatedCart);

    // Calculate the new total
    const newTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);

    // Update sessionStorage with the updated cart
    sessionStorage.setItem('Cart', JSON.stringify(updatedCart));
  };

  const handleCheck = (e) => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location = '/checkout';
    }else {
      window.location = '/signup';
    }
    
  }

  return (
    <Navbar className='backgblue'>
      <Container>
        <Row className='w-100'>
          <Col xs={3}>
            <Nav className='me-auto pt-2'>
              <NavLink to="/allprod" className='linkaccent'><h3 className='roboto'>Products</h3></NavLink>
            </Nav>
          </Col>

          <Col xs={6}>
            <NavbarBrand href="/" className='mx-auto'> <h1 className='prime roboto display-5'>Watch<span className='accent'>It</span></h1> </NavbarBrand>
          </Col>

          <Col xs={{ span: 1, offset: 2 }} >
            <Nav className='ms-auto pt-2'>
              <NavLink className='linkaccent' onClick={handleShow}> <h3 className='roboto'>Cart</h3> </NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>

      {/* Cart Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Current Cart </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table borderless>
            <thead>
              <tr>
                <th> Image </th>
                <th> Name </th>
                <th> Quantity </th>
                <th> Total<span className='text-white' >...</span> </th>
                <th> Remove </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.key}>
                  <td> <Image fluid src={'http://localhost:5002/images/' + item.image}/> </td>
                  <td> {item.brand} {item.model} </td>
                  <td> {item.quantity} </td>
                  <td>R {item.price * item.quantity}</td>
                  <td>
                    <Button variant='add' onClick={() => removeFromCart(item.key)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Table>
            <thead>
              <tr>
                <th>Total:</th>
                <th className='right'>R {total}</th>
              </tr>
            </thead>
          </Table>
          { cart[0] && <Button variant='add' onClick={handleCheck}> Checkout </Button>}
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}
