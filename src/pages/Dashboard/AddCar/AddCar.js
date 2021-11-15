import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AddCar = () => {
    return (
        <div>
            <h1>Add a Car</h1>
            <Link style={{textDecoration:'none'}} to='/explore'><Button variant="contained">Add</Button></Link>
        </div>
    );
};

export default AddCar;