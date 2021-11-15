import { Container,Typography } from '@mui/material';
import React from 'react';
import service from '../../../images/car-service.jpg'
const Service = () => {
    return (
        <Container sx={{mt:2}} >
            <Typography variant="h6" gutterBottom component="div">
                We also Provide The Best Car Service in this City with a Reasonable Price.
            </Typography>
            <img src={service}></img>
        </Container>
    );
};

export default Service;