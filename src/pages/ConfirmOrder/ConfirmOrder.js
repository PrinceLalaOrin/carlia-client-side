
import { Button, Paper, Typography } from '@mui/material';

import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PurchaseModal from './PurchaseModal/PurchaseModal';

const PurchaseForm = () => {
    const{carId} = useParams();

    const [carInfo, setCarInfo] = useState({});
    // console.log(carInfo)

    const [openOrder, setOpenOrder] = React.useState(false);
    const handleOrderOpen = () => setOpenOrder(true);
    const handleOrderClose = () => setOpenOrder(false);

    useEffect(() => {
         fetch(`https://fathomless-dusk-39625.herokuapp.com/cars/${carId}`)
         .then(res => res.json())
         .then( result => setCarInfo(result))
    }, [])
    const {name, model, fullspecs, price} = carInfo;
    return (
        <>
           <Paper style={{width:'50%', marginLeft:'300px'}} elevation={3} >
            <Typography style={{marginTop:'10px'}} variant="h6" gutterBottom component="div">
                Name:- {name}
            </Typography> 
            <Typography variant="subtitle2" gutterBottom component="div">
                 Model:- {model}
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
                Price:- {price}
            </Typography>
            <Typography variant="body2" gutterBottom>
                <span style={{fontWeight:600}}>Performance Details:-</span> {fullspecs}
            </Typography>
                
                <Button variant="contained" size="small" onClick={handleOrderOpen}>
                   Confirm
                </Button>
                <br/>
                <br/>
                <Link style={{textDecoration:'none'}}   to='/home'> <Button variant="contained" size="small">
                   Cancel
                </Button></Link>
                
            </Paper>
            <PurchaseModal 
            openOrder={openOrder}
            handleOrderClose={handleOrderClose}
            carInfo={carInfo}
            ></PurchaseModal> 
        </>
    );
};

export default PurchaseForm;