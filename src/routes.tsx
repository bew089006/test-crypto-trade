import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import NotFound from './components/notfound';

const Routes: any = (props: any) => (
  <Router {...props}>
    <Route path="/app" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;