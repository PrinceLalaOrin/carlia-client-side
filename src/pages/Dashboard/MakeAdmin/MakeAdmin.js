import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const[email, setEmail] = useState('');
    const[success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdmin = e =>{
        const user = {email}
        e.preventDefault();
        fetch('https://fathomless-dusk-39625.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
               
            }
            
        })
    }
    
    return (
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleAdmin}>
            <TextField label="email" variant="filled" type="email" onBlur={handleOnBlur} />
            <br />
            <br />
            <Button type="submit" variant="contained" size="medium">
              Add
            </Button>
            </form>
            {success  && <Alert severity="success">Admin Successfully Added!!!</Alert>}
        </div>
    );
};

export default MakeAdmin;