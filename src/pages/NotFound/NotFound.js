
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/not-found.png'

const NotFound = () => {
    return (
        <div>
         <img src={notfound} alt="" />
         <br />
          <Link style={{textDecoration:'none'}} to='/home'> 
          <Button variant="contained" disableElevation>
            Back To Home
          </Button>
          </Link>
          
        </div>
    );
};

export default NotFound;