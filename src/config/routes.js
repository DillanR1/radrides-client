import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import CarsContainer from '../pages/CarsContainer/CarsContainer';
import CarContainer from '../pages/CarContainer/CarContainer';
import NewCarContainer from '../pages/NewCarContainer/NewCarContainer';
import EditCarContainer from '../pages/EditCarContainer/EditCarContainer';
import Postform from '../components/Postform/Postform';
// Log in and Reg could be stretch goals

export default() => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cars/new' render={() =>
         <NewCarContainer />
        
        }/>
        <Route exact path='/cars/:id' component={CarContainer} />
        <Route path='/cars/:id/edit' component={EditCarContainer} />
        <Route path='/cars/:id/newpost' component={Postform} />
        <Route path='/cars' component={CarsContainer} />
   </Switch>
);
