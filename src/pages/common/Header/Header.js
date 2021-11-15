import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Carlia
            </Typography>

            <Link to='/home' style={{textDecoration:'none', color:'whitesmoke'}}><Button color="inherit">Home</Button></Link>

            <Link to='/explore' style={{textDecoration:'none', color:'white'}}><Button color="inherit">Explore</Button></Link>
           {
             user?.email  ? 
             <>
             <NavLink  style={{textDecoration:'none', color:'whitesmoke'}} to='/dashboard'><Button color="inherit">Dashboard</Button></NavLink> 
             <Button onClick={logOut} color="inherit">Sign Out</Button>
             </>
             :
             <NavLink  style={{textDecoration:'none', color:'whitesmoke'}} to='/login'><Button color="inherit">Sign In</Button></NavLink> 
           }
            
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Header;