import React, { Component } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Weekly from './Pages/Weekly';
import WeeklyBattle from './Pages/WeeklyBattle';
import Popular from './Pages/Popular';
import PopularBattle from './Pages/PopularBattle';
import Favorites from './Pages/Favorites';
import Error404 from './Pages/Error404';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/weekly' component={Weekly}/>
        <Route path='/weekly-battle' component={WeeklyBattle}/>
        <Route path='/popular' component={Popular}/>
        <Route path='/popular-battle' component={PopularBattle}/>
        <Route path='/favorites' component={Favorites}/>
        <Route path ='*' component={Error404}/>
      </Switch>
     </BrowserRouter>
    )
  }
}
