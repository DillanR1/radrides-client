import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import CarsContainer from '../pages/CarsContainer/CarsContainer';
import CarContainer from '../pages/CarContainer/CarContainer';
import NewCarContainer from '../pages/NewCarContainer/NewCarContainer';

// Log in and Reg could be stretch goals

export default() => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cars/new' render={() =>
         <NewCarContainer />
        
        }/>
        <Route path='/cars/:id' component={CarContainer} />
        <Route path='/cars' component={CarsContainer} />
   </Switch>
);

//NOTE: Some of the unread Aliases and values are intentional for future expansions and stretch goals