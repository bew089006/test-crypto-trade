import React from 'react';
import { Router, Switch, Route } from "react-router-dom";

import App from './App';
import MainPage from './components/homepage';
import CryptoDetail from './components/homepage/crypto-detail';
import NotFound from './components/notfound';
import history from './history';

const Routes: any = (props: any) => (
  <Router history={history}>
    <Switch>
      <Route exact path="/crypto" component={MainPage} />
      <Route exact path="/crypto/:id" component={CryptoDetail} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;