import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
    return (
        <div>
            <Typography variant="h3" gutterBottom component="div">
                 Payment System Coming Soon
            </Typography>
            <Link style={{textDecoration:'none'}} to='/dashboard'><Button variant="contained">Back</Button></Link>
        </div>
    );
};

export default Payment;