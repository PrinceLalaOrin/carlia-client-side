import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Orders = () => {
    const {user} = useAuth();
    const[orders, setOrders] = useState([])

    useEffect(() =>{
        fetch(`https://fathomless-dusk-39625.herokuapp.com/orders?email=${user.email}`)
        .then(res=> res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <div>
            <h1>My Orders</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Orders table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Contact No.</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Brand Name & Model</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.clientName}
              </TableCell>
              <TableCell align="right">{order.email}</TableCell>
              <TableCell align="right">{order.phone}</TableCell>
              <TableCell align="right">{order.address}</TableCell>
              <TableCell align="right">{order.brandName}:- {order.model}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Orders;