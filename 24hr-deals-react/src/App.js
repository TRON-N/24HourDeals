
import React, { Component } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import AppLayout from './Components/Layout/Layout';
import Deals from './Views/Deals'
import Cart from './Views/Cart'
import DealDetails from './Views/DealDetails';

export default class App extends Component {
  state = {
    currentRoute: 0,
    deals: [],
    cart: []
  }
  render() {
    return (
      <Router>
        <AppLayout>
          
          <Route path="/" exact component={Deals} />
          <Route path="/:id(\d+)" exact component={DealDetails} />
          <Route path="/cart" component={Cart} />
        </AppLayout>
      </Router>
    );
  }
}
