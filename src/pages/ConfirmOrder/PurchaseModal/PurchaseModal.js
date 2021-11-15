import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PurchaseModal = ({openOrder, handleOrderClose, carInfo}) => {
    const {model,name,price} = carInfo;
    
    const {user} = useAuth();
    const initInfo = {clientName: '', email: user.email, phone:'', address:''  }
    const [orderInfo, setOrderInfo] = useState(initInfo)
    const handleOnBlur = e => {
       const field = e.target.name;
       const value= e.target.value;
       const newOrderInfo = {...orderInfo}
       newOrderInfo[field]= value;
       
       setOrderInfo(newOrderInfo)
    }

    
    const handleOrderSubmit = e => {
       e.preventDefault();
       const order = {
         ...orderInfo, 
         brandName: name,
         model:model,
        
       }
       fetch('https://fathomless-dusk-39625.herokuapp.com/orders',{
         method:'POST',
         headers:{
           'content-type':'application/json'
         },
         body:JSON.stringify(order)
       })
       .then(res=> res.json())
       .then(data => {
         console.log(data)
       })

       handleOrderClose();
       alert('Place Your Order Successfully!!!')
    }
    return (
        <Modal
        open={openOrder}
        onClose={handleOrderClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name} :-{model}
          </Typography>
          <form onSubmit={handleOrderSubmit}>

          <TextField
          
          sx={{width:'70%', m:1}}
          id="outlined-size-small"
          defaultValue="Your Name"
          name="clientName"
          onBlur={handleOnBlur}
          size="small"
        />
            <TextField
          disabled
          sx={{width:'70%', m:1}}
          id="outlined-size-small"
          defaultValue={model}
          name="model"
          
          size="small"
        />
          <TextField
          disabled
          sx={{width:'70%', m:1}}
          id="outlined-size-small"
          defaultValue={price}
         
          name="price"
          size="small"
        />
          
          <TextField
          
          sx={{width:'70%', m:1}}
          id="outlined-size-small"
          name="phone"
          defaultValue="Put Your Contact Number"
          onBlur={handleOnBlur}
          size="small"
        />
          <TextField
          
          sx={{width:'70%', m:1}}
          id="outlined-size-small"
          name="email"
          defaultValue={user.email}
          onBlur={handleOnBlur}
          size="small"
        />
          <TextField
          
          sx={{width:'70%', m:1}}
          id="outlined-size-small"
          defaultValue="Address"
          name="address"
          onBlur={handleOnBlur}
          size="small"
        />
          
        <br />
        <Button type='submit' variant="contained" size="small">
         Place Order
        </Button>
          </form>
        </Box>
      </Modal>
    );
};

export default PurchaseModal;