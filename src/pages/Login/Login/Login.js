import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/user-login.png'
const Login = () => {
    const [loginData, setLoginData] =useState({})
    const {user, loginUser, loading, authError} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleLogin = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, history, location);
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    return (
        <Container>
            <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
                  <img src={login} alt="" />
               </Grid>
               <Grid item xs={12} md={6}>
               <Typography sx={{mt: 2}} variant="h6" gutterBottom component="div">
                  Sign In
               </Typography>
               <form onSubmit={handleLogin}>
                  
                  <TextField sx={{width: '70%', m:1}} id="standard-basic" label="Your Email" variant="standard" name="email" type="email" onBlur={handleOnBlur} />
                  <TextField sx={{width: '70%', m:1}} id="standard-basic" label="Your Password" type="password" variant="standard" name="password"  onBlur={handleOnBlur} />
                  <br />
                  
                  <Button type='submit' variant="contained" color="success">
                    Sign In
                  </Button>
                  <br />
                  <Link style={{textDecoration:'none'}} to='/register'><Button variant="text">New User? Please Complete Your Registration</Button></Link>
               </form>
               {loading && <CircularProgress />}
               {user?.email  && <Alert severity="success">Sign In Successful</Alert>}
               {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
  
            </Grid>
        </Container>
    );
};

export default Login;