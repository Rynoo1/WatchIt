import React, {useState} from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap'

function Cart(props) {
  return (
    <tr>
    <td> <Image fluid src={'http://localhost:5002/images/' + props.image} /> </td>
    <td> {props.brand} {props.model} </td>
    <td> {props.quantity} </td>
    <td> {props.price} </td>
    <td>remove</td>
</tr>
  )
}

export default Cart