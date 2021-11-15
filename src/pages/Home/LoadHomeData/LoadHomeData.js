import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import DisplayHomeData from '../DisplayHomeData/DisplayHomeData';
const LoadHomeData = () => {
    const [cars, setCars] =useState([])
    // console.log(cars)
    useEffect( () => {
       fetch('https://fathomless-dusk-39625.herokuapp.com/cars')
       .then(res => res.json())
       .then(data => setCars(data))
    }, [])

    const mainCars = cars.slice(0,6);
    return (
        <>
         <Typography variant="h6" gutterBottom component="div">
              LATEST VEHICLES
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
               <Container>
               <Grid container   spacing={{ xs: 2, md: 5 }} columns={{ xs: 4,  md: 8 }}>
                       {
                           mainCars.map(car => <DisplayHomeData key={car._id} car={car}/>)
                       }
               </Grid>
               </Container>
            </Box>
        </>
    );
};

export default LoadHomeData;