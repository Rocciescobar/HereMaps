import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import NewTrails from './NewTrails';

const Main = () => (
  <main>
    <Switch>      
      <Route path='/explorer' component={NewTrails}/>  
      <Route exact path='/' component={Home}/>
      <Route path='/profile' component={Profile}/>         
    </Switch>
  </main>
)

export default Main