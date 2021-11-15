import React, { useEffect, useState } from 'react';
import {  Typography } from '@mui/material';
import Box from '@mui/material/Box';
import DisplayAllCars from '../DisplayAllCars/DisplayAllCars'
import Grid from '@mui/material/Grid';
const LoadAllCars = () => {
    const [cars, setCars] =useState([])
    // console.log(cars)
    useEffect( () => {
       fetch('https://fathomless-dusk-39625.herokuapp.com/cars')
       .then(res => res.json())
       .then(data => setCars(data))
    }, [])
    return (
          <>
            <Typography variant="h3" gutterBottom component="div">
                All Cars
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                   cars.map(car => <DisplayAllCars key={car._id} car={car}></DisplayAllCars>)
               }
            </Grid>
            </Box>
          </>
    );
};

export default LoadAllCars;
