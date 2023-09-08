import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

function OrderProcess() {
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const [update, setUpdate] = useState(false);
  const [orderCart, setOrderCart] = useState();
  let count = 0;
  let num = 0;

  const handleClose = () => setShow(false);
  const handleShow = (itemKey) => {
    const index = orders.findIndex(object => {
        return object._id === itemKey
    });
    setOrderCart(orders[index].cart);
    console.log(orderCart);
    setShow(true)
  }

  useEffect(() => {
    try {
      Axios.get("http://localhost:5002/api/getorders").then((result) => {
        let orderData = result.data;
        setOrders(orderData);
      });
    } catch (error) {
      console.log(error);
    }
    setUpdate(false);
  }, [update]);

  const handleDispatch = (itemKey) => {
    Axios.delete("http://localhost:5002/api/orders/" + itemKey);
    console.log("dispatched order");
    setUpdate(true);
  };

  return (
    <div className="backgblue vh-100">
      <Table responsive>
        <thead className="roboto">
          <tr className="">
            <th className="customhead">Order Nr</th>
            <th className="customhead">Customer Name</th>
            <th className="customhead">Total</th>
            <th className="customhead">See Cart</th>
            <th className="customhead">Dispatched</th>
          </tr>
        </thead>
        <tbody className="condensed hover">
          {orders.map((item) => (
            <tr key={item._id}>
                {/* {num = count}; */}
              <td className="custom"> #{item._id} </td>
              <td className="custom"> {item.name} </td>
              <td className="custom"> R {item.total} </td>
              <td className="custom">
                <Link className="linkaccent" onClick={() => handleShow(item._id)}> See </Link>
              </td>
              <td className="custom">
                <Button variant="add" onClick={() => handleDispatch(item._id)}> Dispatched </Button>
              </td>
              {/* {count++}; */}
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="roboto">Order Info</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Table>
            <thead>
              <tr>
                <th className="roboto"> Cart </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {orderCart} </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrderProcess;
