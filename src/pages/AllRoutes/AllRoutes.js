import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadAllCars from '../AllCars/LoadAllCars/LoadAllCars';


import Home from '../Home/Home/Home';

import NotFound from '../NotFound/NotFound';
import ConfirmOrder from '../ConfirmOrder/ConfirmOrder';
import Login from '../Login/Login/Login';
import Registration from '../Login/Registration/Registration';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import Payment from '../Dashboard/Payment/Payment';


const AllRoutes = () => {
    return (
        <div>

            <Switch>
               
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/home'>
                    <Home/>
                </Route>
                <Route path='/explore'>
                    <LoadAllCars/>
                </Route>
                <Route path='/register'>
                   <Registration/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <PrivateRoute path='/confirmOrder/:carId'>
                    <ConfirmOrder/>
                </PrivateRoute>
                <PrivateRoute path='/dashboard'>
                    <Dashboard/>
                </PrivateRoute>
                <PrivateRoute path='/payment'>
                    <Payment/>
                </PrivateRoute>
                <Route path='/*'>
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    );
};

export default AllRoutes;