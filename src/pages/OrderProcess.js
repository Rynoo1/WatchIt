import React from 'react'
import { Table } from 'react-bootstrap'

function OrderProcess() {
  return (
    <div>
        <Table variant='custom'>
            <thead className='roboto'>
                <tr>
                    <th>Order Nr</th>
                    <th>QTY</th>
                    <th>Customer Name</th>
                    <th>Total before shipping</th>
                </tr>
            </thead>
            <tbody className='condensed'>
                <tr>
                    <td>#234</td>
                    <td>2</td>
                    <td>Jonah</td>
                    <td>R 3500</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default OrderProcess