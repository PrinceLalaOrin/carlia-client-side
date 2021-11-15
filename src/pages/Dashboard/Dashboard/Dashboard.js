import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


import useAuth from '../../../hooks/useAuth';
import {
    
    Switch,
    Route,
    Link,
    
    useRouteMatch
  } from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddCar from '../AddCar/AddCar';
import AdminRoute from '../../AdminRoute/AdminRoute';


const drawerWidth = 190;

function Dashboard(props) {
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { logOut,admin} =useAuth();
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link to='/home' style={{textDecoration:'none', color:'mediumpurple'}}><Button color="inherit">Home</Button></Link>
      <Link to={`${url}`} style={{textDecoration:'none', color:'mediumpurple'}}><Button color="inherit">Dashboard</Button></Link>
      {admin && <>
        <Link to={`${url}/makeAdmin`} style={{textDecoration:'none', color:'mediumpurple'}}><Button color="inherit">Make Admin</Button></Link>
      <Link to={`${url}/addCars`} style={{textDecoration:'none', color:'mediumpurple'}}><Button color="inherit">Add a Car</Button></Link>
      </>}
      <br/>
      <br/>
      <Link to='/payment' style={{textDecoration:'none', color:'mediumpurple'}}><Button color="inherit">Payment</Button></Link>
      
      <br/>
      <br/>
      <Button style={{backgroundColor:'mediumpurple'}} onClick={logOut} color="inherit">Sign Out</Button> 

      
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Switch>
        <Route exact path={path}>
          <DashboardHome/>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin/>
        </AdminRoute>
        <AdminRoute path={`${path}/addCars`}>
            <AddCar/>
        </AdminRoute>
      </Switch>
        
       
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  
  window: PropTypes.func,
};

export default Dashboard;
