import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartdataAsync } from '../../Services/Action/Product.action';
import { Button, Container, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Cart() {
    const { cartData } = useSelector((state) => state.productReducer);
    
    return (
        <div>
            <Container>
                <div className='d-flex justify-content-between align-items-center py-3'>
                    <h4 className='text-primary'>Cart</h4>
                    <NavLink to='/' className='btn bg-primary text-light'>Add Products</NavLink>
                </div>

                <Table bordered hover>
                    <thead>
                        <tr className='d-flex w-100 text-primary'>
                            <th className='col-1'>Id</th>
                            <th className='col-2'>Name</th>
                            <th className='col-1'>Price</th>
                            <th className='col-2'>Date</th>
                            <th className='col-6'>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartData.map((data) => {
                                return (
                                    <tr className='d-flex w-100'>
                                        <td className='col-1'>{data.id}</td>
                                        <td className='col-2'>{data.name}</td>
                                        <td className='col-1'>{data.price}</td>
                                        <td className='col-2'>{data.date}</td>
                                        <td className='col-6'>{data.detail}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default Cart
