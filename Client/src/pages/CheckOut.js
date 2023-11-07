import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Table, Image, Button, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "react-bootstrap";
import Axios from "axios";

function CheckOut() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  let count = 0;
  let data = '';

  const [showSuc, setShowSuc] = useState(false);
  const CloseSuc = () => {
    setShowSuc(false);
    window.location = '/';
  }

  // create and add order to database
  const handleOrder = (e) => {
    while (count < cart.length) {
        data = data + cart[count].brand + ' ' + cart[count].model + ' - ' + cart[count].quantity + ', ';
        count++;
    };
    let details = {
        name: name,
        address: address,
        email: email,
        cart: data,
        total: total
    };
    Axios.post('http://localhost:5002/api/addorders', details)
    console.log(data);
    console.log(cart);
    sessionStorage.setItem('Cart', JSON.stringify([]));
    setShowSuc(true);
  }

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
  }, []);

  const removeFromCart = (itemKey) => {
    const updatedCart = cart.filter((item) => item.key !== itemKey);
    setCart(updatedCart);

    // Calculate the new total
    const newTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);

    // Update sessionStorage with the updated cart
    sessionStorage.setItem('Cart', JSON.stringify(updatedCart));
  };

  return (  
    <div className="vh-100" >
      <Container>
        <Row>
          <Col className="backgaccent me-2">
            <h3 className="roboto mt-2 blue"> Personal Information </h3>
            <Form className="mt-4">
              <Form.Group as={Row} className="mb-2">
                <Form.Label column xl={{ span: 3, offset: 1 }} className="condensed white"> Full Name </Form.Label>
                <Col xl={5}>
                  <Form.Control onChange={(e) => setName(e.target.value)} id="nameIn" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2">
                <Form.Label column xl={{ span: 3, offset: 1 }} className="condensed white"> Email Address </Form.Label>
                <Col xl={5}>
                  <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" id="emailIn" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-2">
                <Form.Label  column  xl={{ span: 3, offset: 1 }}  className="condensed white"> Physical Address </Form.Label>
                <Col xl={5}>
                  <Form.Control onChange={(e) => setAddress(e.target.value)} id="addressIn" />
                </Col>
              </Form.Group>
            </Form>
          </Col>

          <Col className="backgprime">
            <h3 className="roboto mt-2 blue"> Cart </h3>
            <Table>
              <thead>
                <tr>
                  <th> Image </th>
                  <th> Name </th>
                  <th> Quantity </th>
                  <th> Total<span className="white">.....</span> </th>
                  <th> Remove </th>
                </tr>
              </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.key}>
                        <td> <Image fluid src={"http://localhost:5002/images/" + item.image} /> </td>
                        <td className="roboto"> {item.brand} {item.model} </td>
                        <td className="roboto"> {item.quantity} </td>
                        <td className="roboto"> R {item.price * item.quantity}</td>
                        <td>
                            <Button variant="add" onClick={() => removeFromCart(item.key)}> Remove </Button>
                        </td>
                    </tr>              
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="roboto">Total: </td>
                    <td className="roboto"> R {total} </td>
                  </tr>

                </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="backgprime mt-3 mx-3 mb-3">
          <h3 className="roboto mt-2">Payment information</h3>
          <Row>
            <Col>
            <Form className="mt-4">
                <Row>
                    <Col xl={{ span: 4, offset: 2 }}>
                        <Form.Group className="mb-2">
                            <Form.Label className="roboto"> Name on Card </Form.Label>
                            <Form.Control id="cardNameIn" />
                        </Form.Group>
                    </Col>

                    <Col xl={{ span: 4 }}>
                        <Form.Group className="mb-2">
                            <Form.Label className="roboto"> Card Number </Form.Label>
                            <Form.Control id="cardIn"/>
                        </Form.Group>  
                    </Col>

                    <Col xl={{ span: 4, offset: 2 }}>
                        <Form.Group className="mb-2">
                            <Form.Label className="roboto"> Expiry Date </Form.Label>
                            <Form.Control id="expiryIn" />
                        </Form.Group>
                    </Col>

                    <Col xl={{ span: 4 }}>
                        <Form.Group className="mb-2">
                            <Form.Label className="roboto"> CVV </Form.Label>
                            <Form.Control id="CVVIn" />
                        </Form.Group>
                    </Col>
                </Row>

              <Button onClick={handleOrder} variant="accent" className="mt-3 mb-4">Order</Button>

            </Form>
            </Col>
          </Row>
        </Row>
      </Container>

      <Modal show={showSuc} >
        <ModalHeader>
            <ModalTitle>Success!!</ModalTitle>
        </ModalHeader>
        <ModalBody>
            Your order has been placed!
        </ModalBody>
        <ModalFooter>
            <Button variant="add" onClick={CloseSuc}> Home Page </Button>
        </ModalFooter>
      </Modal>

    </div> 
  );
}

export default CheckOut;
