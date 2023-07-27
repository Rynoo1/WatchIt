import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function OrderProcess() {
  return (
    <div>
        <Table responsive>
            <thead className='roboto'>
                <tr className=''>
                    <th className='customhead'>Order Nr</th>
                    <th className='customhead'>QTY</th>
                    <th className='customhead'>Customer Name</th>
                    <th className='customhead'>Date</th>
                    <th className='customhead'>Total</th>
                    <th className='customhead'>See more</th>
                </tr>
            </thead>
            <tbody className='condensed hover'>
                <tr className='custom'>
                    <td className='custom'>#234</td>
                    <td className='custom'>2</td>
                    <td className='custom'>Jonah</td>
                    <td className='custom'>Date</td>
                    <td className='custom'>R 3500</td>
                    <td className='custom'> <Link className='linkaccent'>See</Link> </td>
                </tr>
                <tr className='custom'>
                    <td className='custom'>#234</td>
                    <td className='custom'>2</td>
                    <td className='custom'>Jonah</td>
                    <td className='custom'>Date</td>
                    <td className='custom'>R 3500</td>
                    <td className='custom'> <Link className='linkaccent'>See</Link> </td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default OrderProcess