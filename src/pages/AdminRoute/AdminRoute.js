import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const AdminRoute = ({children, ...rest}) => {
    const { user, loading, admin} = useAuth();
    if(loading){ return <CircularProgress/>}
    return (
        <Route
        {...rest}
        render ={({location}) => user.email && admin ?  children : <Redirect
        to ={{
            pathname:'/home',
            state: {from: location}
        }}
        ></Redirect>}
        >
                
        </Route>
    );
};

export default AdminRoute;