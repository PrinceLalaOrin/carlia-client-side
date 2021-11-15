import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/user-login.png'

const Registration = () => {
    const [registerData, setRegisterData] =useState({})
    const history = useHistory();
    const {registerUser,user, loading, authError} = useAuth();
    const handleRegister = e => {
        e.preventDefault();
        if(registerData.password !== registerData.repassword){
            alert('Password not Matched')
            return
        }
       registerUser(registerData.email, registerData.password,registerData.name, history);
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        console.log(newRegisterData)
        setRegisterData(newRegisterData);
    }
    return (
        <Container>
            <Grid container spacing={2}>
               <Grid item xs={12} md={6}>
                  <img src={login} alt="" />
               </Grid>
               <Grid item xs={12} md={6}>
               <Typography sx={{mt: 2}} variant="h6" gutterBottom component="div">
                  Register
               </Typography>
               { !loading && <form onSubmit={handleRegister}>
                  
                  <TextField sx={{width: '70%', m:1}} id="standard-basic" label="Your Name" variant="standard" name="name"  onBlur={handleOnBlur} />
                  <TextField sx={{width: '70%', m:1}} id="standard-basic" label="Your Email" variant="standard" name="email" type="email" onBlur={handleOnBlur} />
                  <TextField sx={{width: '70%', m:1}} id="standard-basic" label="Your Password" type="password" variant="standard" name="password"  onBlur={handleOnBlur} />
                  <TextField sx={{width: '70%', m:1}} id="standard-basic" label="Retype Password" type="password" variant="standard" name="repassword"  onBlur={handleOnBlur} />
                  <br />
                  
                  <Button type='submit' variant="contained" color="success">
                    Register
                  </Button>
                  <br />
                  <Link style={{textDecoration:'none'}} to='/login'><Button variant="text">Already Registered? Please Sign In</Button></Link>
               </form>}
               {loading && <CircularProgress />}
               {user?.email  && <Alert severity="success">Registration Successful</Alert>}
               {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
  
            </Grid>
        </Container>
    );
};

export default Registration;