import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const DisplayAllCars = (props) => {
    const {name,  photo, highlights,_id, price} = props.car;
    return (
        <>
          <Grid item xs={4} sm={4} md={4} >
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={photo}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Brand:- {name}
        </Typography>
        <Typography variant="subtitle2" gutterBottom component="div">
          Price:- {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {highlights}
        </Typography>
      </CardContent>
       <Link style={{textDecoration:'none'}} to={`/confirmOrder/${_id}`}>
       <Button  sx={{mb:2}} variant="contained" size="small">
           Order Now
        </Button>
       </Link>
       
              </Card>
          </Grid>
          
        </>
    );
};

export default DisplayAllCars;